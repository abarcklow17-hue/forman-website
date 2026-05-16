"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Users, Calendar, BarChart3, Bell, Eye } from 'lucide-react';

const mockLeads = [
  { id: '101', name: 'John Doe', service: 'Garage Cleanout', date: 'Oct 24, 2023', status: 'Pending', price: '$250' },
  { id: '102', name: 'Sarah Smith', service: 'Furniture Removal', date: 'Oct 25, 2023', status: 'Scheduled', price: '$120' },
  { id: '103', name: 'Mike Johnson', service: 'Estate Cleanout', date: 'Oct 26, 2023', status: 'Completed', price: '$850' },
  { id: '104', name: 'Greeley High', service: 'Construction Debris', date: 'Oct 27, 2023', status: 'Quote Sent', price: '$450' },
];

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-bold">Admin <span className="text-primary italic">Dashboard</span></h1>
            <p className="text-muted-foreground">Welcome back, Archie. Here's what's happening with Forman & Co.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="border-white/10 bg-white/5">
              <Bell className="w-4 h-4 mr-2" /> Notifications
            </Button>
            <Button className="font-bold">
              Export Leads
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-card border-white/5">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Total Revenue</p>
                <BarChart3 className="w-4 h-4 text-primary" />
              </div>
              <p className="text-3xl font-bold">$12,450</p>
              <p className="text-xs text-green-500 font-bold mt-1">+12.5% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-white/5">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">New Leads</p>
                <Users className="w-4 h-4 text-primary" />
              </div>
              <p className="text-3xl font-bold">24</p>
              <p className="text-xs text-primary font-bold mt-1">8 awaiting response</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-white/5">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Scheduled Jobs</p>
                <Calendar className="w-4 h-4 text-primary" />
              </div>
              <p className="text-3xl font-bold">12</p>
              <p className="text-xs text-muted-foreground font-bold mt-1">Next job: 2:00 PM today</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-white/5">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Completion Rate</p>
                <LayoutDashboard className="w-4 h-4 text-primary" />
              </div>
              <p className="text-3xl font-bold">98%</p>
              <p className="text-xs text-green-500 font-bold mt-1">Excellent performance</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Recent Leads</h2>
            <Button variant="link" className="text-primary font-bold uppercase tracking-widest text-xs">View All Leads</Button>
          </div>
          <div className="bg-card border border-white/5 rounded-xl overflow-hidden">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Customer</TableHead>
                  <TableHead className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Service</TableHead>
                  <TableHead className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Date</TableHead>
                  <TableHead className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Price Est.</TableHead>
                  <TableHead className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Status</TableHead>
                  <TableHead className="text-right text-xs font-bold uppercase tracking-widest text-muted-foreground">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLeads.map((lead) => (
                  <TableRow key={lead.id} className="border-white/5 hover:bg-white/5 transition-colors">
                    <TableCell className="font-bold">{lead.name}</TableCell>
                    <TableCell className="text-muted-foreground">{lead.service}</TableCell>
                    <TableCell className="text-muted-foreground">{lead.date}</TableCell>
                    <TableCell className="font-bold text-primary">{lead.price}</TableCell>
                    <TableCell>
                      <Badge variant={
                        lead.status === 'Completed' ? 'default' : 
                        lead.status === 'Scheduled' ? 'secondary' : 
                        'outline'
                      } className={
                        lead.status === 'Completed' ? 'bg-green-500/10 text-green-500 border-green-500/20' : ''
                      }>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:text-primary">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
