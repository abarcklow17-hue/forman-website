'use server';
/**
 * @fileOverview An AI agent for estimating junk volume and price from photos.
 *
 * - estimateJunkVolumeFromPhotos - A function that handles the junk volume and price estimation process.
 * - EstimateJunkVolumeFromPhotosInput - The input type for the estimateJunkVolumeFromPhotos function.
 * - EstimateJunkVolumeFromPhotosOutput - The return type for the estimateJunkVolumeFromPhotos function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const EstimateJunkVolumeFromPhotosInputSchema = z.object({
  photos: z
    .array(z.string())
    .describe(
      "An array of photos of the junk, as data URIs that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z
    .string()
    .optional()
    .describe('An optional text description of the junk pile.'),
});
export type EstimateJunkVolumeFromPhotosInput = z.infer<
  typeof EstimateJunkVolumeFromPhotosInputSchema
>;

const EstimateJunkVolumeFromPhotosOutputSchema = z.object({
  estimatedVolumeCubicYards: z
    .number()
    .describe('The estimated volume of the junk in cubic yards.'),
  estimatedPriceRange: z
    .string()
    .describe('The estimated price range for removing the junk (e.g., "$100 - $200").'),
  notes: z
    .string()
    .optional()
    .describe('Any additional notes or disclaimers regarding the estimate.'),
});
export type EstimateJunkVolumeFromPhotosOutput = z.infer<
  typeof EstimateJunkVolumeFromPhotosOutputSchema
>;

export async function estimateJunkVolumeFromPhotos(
  input: EstimateJunkVolumeFromPhotosInput
): Promise<EstimateJunkVolumeFromPhotosOutput> {
  return estimateJunkVolumeFromPhotosFlow(input);
}

const prompt = ai.definePrompt({
  name: 'estimateJunkVolumeFromPhotosPrompt',
  input: { schema: EstimateJunkVolumeFromPhotosInputSchema },
  output: { schema: EstimateJunkVolumeFromPhotosOutputSchema },
  prompt: `You are an expert junk removal estimator for "Forman & Co Junk Removal". Your task is to analyze photos and a description of a junk pile and provide an immediate, approximate volume estimate in cubic yards and an estimated price range.

Keep in mind that these estimates are approximate and may vary upon on-site inspection.

Input Description: {{{description}}}

{{#each photos}}
Photo {{math @index '+' 1}}: {{media url=this}}
{{/each}}

Provide the estimated volume in cubic yards as a number and a price range as a string (e.g., "$100 - $200"). Include any important notes or disclaimers in the 'notes' field.

`,
});

const estimateJunkVolumeFromPhotosFlow = ai.defineFlow(
  {
    name: 'estimateJunkVolumeFromPhotosFlow',
    inputSchema: EstimateJunkVolumeFromPhotosInputSchema,
    outputSchema: EstimateJunkVolumeFromPhotosOutputSchema,
  },
  async (input) => {
    const mediaParts = input.photos.map((url) => ({ media: { url } }));
    const promptParts: (genkit.InputMediaPart | genkit.InputTextPart)[] = [
      { text: prompt.prompt({ description: input.description, photos: [] }) },
      ...mediaParts,
    ];

    const { output } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image',
      prompt: promptParts,
      output: { schema: EstimateJunkVolumeFromPhotosOutputSchema },
      config: {
        responseModalities: ['TEXT'],
      },
    });
    return output!;
  }
);
