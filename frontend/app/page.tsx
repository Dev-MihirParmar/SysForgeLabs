'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Zap,
  Search,
  Bell,
  Menu,
  Home,
  Cpu,
  Network,
  Server,
  Printer,
  CircuitBoard,
  Code,
  Users,
  Sun,
  Moon,
  ChevronRight,
} from 'lucide-react';

const TypeWriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return <span>{displayText}</span>;
};

const AnimatedLogo = () => {
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(`hsl(${Math.random() * 360}, 100%, 50%)`);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return <Zap className="h-6 w-6" style={{ color }} />;
};

const LiveUserCount = () => {
  const [count, setCount] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 10));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2 text-sm">
      <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      <span>{count.toLocaleString()} users online</span>
    </div>
  );
};

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className={`flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-700`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 dark:bg-gray-800 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Button variant="ghost" size="icon" className="mr-2 lg:hidden" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center space-x-2">
            <AnimatedLogo />
            <h1 className="text-xl font-bold">SysForge Labs</h1>
          </div>
          <div className="flex-1 px-4">
            <form className="flex items-center space-x-2">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search products, services..."
                  className="w-full pr-10"
                />
                <Button type="submit" size="sm" className="absolute right-0 top-0 h-full">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Get a Quote
            </Button>
            <Button size="icon" variant="ghost">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`w-64 border-r bg-background dark:bg-gray-800 ${
            sidebarOpen ? 'block' : 'hidden'
          } lg:block`}
        >
          <ScrollArea className="h-full py-4">
            <nav className="space-y-2 px-2">
              <Link href="/" passHref>
                <Button variant="ghost" className="w-full justify-start">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
              </Link>
              <Link href="/products" passHref>
                <Button variant="ghost" className="w-full justify-start">
                  <Cpu className="mr-2 h-4 w-4" />
                  Products
                </Button>
              </Link>
              <Link href="/services" passHref>
                <Button variant="ghost" className="w-full justify-start">
                  <Network className="mr-2 h-4 w-4" />
                  Services
                </Button>
              </Link>
              <Link href="/support" passHref>
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Support
                </Button>
              </Link>
            </nav>
          </ScrollArea>
        </aside>

        {/* Main Section */}
        <main className="flex-1 overflow-y-auto">
          <div className="container py-6">
            {/* Welcome Section */}
            <section className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  <TypeWriter text="Welcome to SysForge Labs" />
                </h2>
              </motion.div>
              <LiveUserCount />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {/* Custom PCs Card */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900">
                    <CardHeader>
                      <CardTitle>Custom PCs</CardTitle>
                      <CardDescription>Build your dream machine</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-2">
                        <Button variant="outline" size="sm">
                          <Cpu className="h-4 w-4 mr-2" />
                          Gaming PCs
                        </Button>
                        <Button variant="outline" size="sm">
                          <Cpu className="h-4 w-4 mr-2" />
                          Workstations
                        </Button>
                        <Button variant="outline" size="sm">
                          <Server className="h-4 w-4 mr-2" />
                          Servers
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* NAS Solutions Card */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card className="bg-gradient-to-br from-green-100 to-teal-100 dark:from-gray-800 dark:to-teal-900">
                    <CardHeader>
                      <CardTitle>NAS Solutions</CardTitle>
                      <CardDescription>Secure data storage</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Button size="sm" className="w-full">
                          Explore NAS Options
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Custom Configuration
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Networking Card */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-gray-800 dark:to-orange-900">
                    <CardHeader>
                      <CardTitle>Networking</CardTitle>
                      <CardDescription>Connect your world</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span>Routers</span>
                          <Badge>New</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Switches</span>
                          <Badge>Popular</Badge>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          <Network className="h-4 w-4 mr-2" />
                          View All
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Services Card */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card className="bg-gradient-to-br from-pink-100 to-red-100 dark:from-gray-800 dark:to-red-900">
                    <CardHeader>
                      <CardTitle>Services</CardTitle>
                      <CardDescription>Expert solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Button size="sm" className="w-full">
                          Consultation
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          Support Plans
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </section>

            {/* Featured Products */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
              <Tabs defaultValue="all" className="w-full">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="pcs">PCs</TabsTrigger>
                  <TabsTrigger value="nas">NAS</TabsTrigger>
                  <TabsTrigger value="networking">Networking</TabsTrigger>
                </TabsList>
                <AnimatePresence mode="wait">
                  <motion.div
                    key="all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TabsContent value="all">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          { type: 'pc', title: 'Gaming Beast PC', specs: 'RTX 3080, Ryzen 9', price: '$1999' },
                          { type: 'nas', title: 'SysForge NAS Pro', capacity: '100TB', price: '$1499' },
                          { type: 'networking', title: 'Enterprise Switch', ports: '48 Ports', price: '$599' },
                          { type: 'pc', title: 'Compact Workstation', specs: 'i7, 64GB RAM', price: '$1299' },
                        ].map((product, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link href={`/product/${product.type}/${index}`}>
                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-sm flex items-center">
                                    {product.type === 'pc' && <Cpu className="h-4 w-4 mr-2" />}
                                    {product.type === 'nas' && <Server className="h-4 w-4 mr-2" />}
                                    {product.type === 'networking' && (
                                      <Network className="h-4 w-4 mr-2" />
                                    )}
                                    {product.title}
                                  </CardTitle>
                                  <CardDescription className="text-xs">
                                    {product.specs || product.capacity || product.ports}
                                  </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                  <div className="flex items-center justify-between w-full">
                                    <span className="text-sm font-bold">{product.price}</span>
                                    <Button size="sm">View Details</Button>
                                  </div>
                                </CardFooter>
                              </Card>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  </motion.div>
                </AnimatePresence>
              </Tabs>
            </section>

            {/* Our Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 3D Printing Services */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                    <CardHeader>
                      <Printer className="h-8 w-8 mb-4 text-blue-500" />
                      <CardTitle>3D Printing Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Custom 3D-printed components for hardware, prototyping services, and design-to-manufacture solutions.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                {/* PCB Design & Custom Electronics */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card className="bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900">
                    <CardHeader>
                      <CircuitBoard className="h-8 w-8 mb-4 text-green-500" />
                      <CardTitle>PCB Design & Custom Electronics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Custom PCB design and printing services, electronics prototyping, and components for DIY tech projects.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                {/* Software Solutions */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900">
                    <CardHeader>
                      <Code className="h-8 w-8 mb-4 text-yellow-500" />
                      <CardTitle>Software Solutions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Custom software for NAS, server, and network management, software integration services, and scalability solutions.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Choose SysForge Labs?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Affordability */}
                <Card className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                  <CardHeader>
                    <CardTitle>Affordability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      High-quality tech without breaking the bank. We prioritize cost-effective solutions without compromising on performance.
                    </p>
                  </CardContent>
                </Card>

                {/* Customization */}
                <Card className="bg-gradient-to-br from-green-500 to-teal-500 text-white">
                  <CardHeader>
                    <CardTitle>Customization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Solutions tailored to your needs. We understand that one size doesn&apos;t fit all, especially in technology.
                    </p>
                  </CardContent>
                </Card>

                {/* Serviceability */}
                <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
                  <CardHeader>
                    <CardTitle>Serviceability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Long-term support and maintenance options. We&apos;re committed to ensuring your tech keeps running smoothly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Testimonials */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Customer Testimonials</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: 'John Doe',
                    company: 'Tech Innovations Inc.',
                    testimonial:
                      'SysForge Labs built me a custom NAS that perfectly fits my small business needs. Their support has been exceptional!',
                  },
                  {
                    name: 'Jane Smith',
                    company: 'Data Solutions Co.',
                    testimonial:
                      'The enterprise networking solutions from SysForge have significantly improved our company\'s infrastructure. Great service!',
                  },
                  {
                    name: 'Alex Johnson',
                    company: 'Gaming Studio X',
                    testimonial:
                      'Our custom-built gaming PCs from SysForge are absolute beasts. They\'ve taken our game development to the next level.',
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          &quot;{testimonial.testimonial}&quot;
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Get Started with SysForge Labs</h2>
              <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold mb-2">Ready to forge your tech future?</h3>
                      <p className="text-lg">Let&apos;s build something amazing together.</p>
                    </div>
                    <Button size="lg" variant="secondary" className="w-full md:w-auto">
                      Get a Free Consultation
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Custom PCs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    NAS Systems
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Networking Equipment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Servers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    3D Printing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    PCB Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Software Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Warranty Info
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2023 SysForge Labs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* Social Media Icons */}
              <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                {/* Facebook Icon */}
                {/* ... SVG code ... */}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                {/* Twitter Icon */}
                {/* ... SVG code ... */}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                {/* GitHub Icon */}
                {/* ... SVG code ... */}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
