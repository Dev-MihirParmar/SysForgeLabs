'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Server, Cpu, Network, Printer, CircuitBoard, Code, Search, Sun, Moon } from "lucide-react"

export default function HomePage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mr-4 hidden md:flex"
          >
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-09-21_183408-removebg-preview-TD4J4R0InfpkCobci0BpVKoUrpEIOb.png" 
                alt="SysForge Labs Logo" 
                width={120} 
                height={40} 
              />
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/products" className="transition-colors hover:text-foreground/80 text-foreground/60">Products</Link>
              <Link href="/services" className="transition-colors hover:text-foreground/80 text-foreground/60">Services</Link>
              <Link href="/consulting" className="transition-colors hover:text-foreground/80 text-foreground/60">Consulting</Link>
              <Link href="/support" className="transition-colors hover:text-foreground/80 text-foreground/60">Support</Link>
              <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">About Us</Link>
              <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
            </nav>
          </motion.div>
          <div className="flex items-center space-x-4 ml-auto">
            <form className="hidden lg:block lg:flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <Button variant="outline">Get a Free Consultation</Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Innovative, Affordable Technology Solutions for Everyone
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  From custom PCs to enterprise-level NAS systems, we bring cutting-edge tech within reach.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Explore Our Products</Button>
                <Button variant="outline">Get Started with SysForge Labs</Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Products</h2>
            <Tabs defaultValue="nas" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="nas">NAS Systems</TabsTrigger>
                <TabsTrigger value="pc">Custom PCs</TabsTrigger>
                <TabsTrigger value="networking">Networking</TabsTrigger>
                <TabsTrigger value="homelab">Home Lab Kits</TabsTrigger>
              </TabsList>
              <TabsContent value="nas">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>NAS & Storage Solutions</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <Server className="h-6 w-6" />
                        <div>
                          <h3 className="font-semibold">Pre-built NAS Systems</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">For individuals, small businesses, and enterprises</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Server className="h-6 w-6" />
                        <div>
                          <h3 className="font-semibold">Custom NAS Configurations</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Tailored to specific storage needs</p>
                        </div>
                      </div>
                      <Button className="w-full">Explore NAS Solutions</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
              <TabsContent value="pc">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Custom PCs & Servers</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <Cpu className="h-6 w-6" />
                        <div>
                          <h3 className="font-semibold">Custom-built PCs</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Gaming, professional, and workstation builds</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Server className="h-6 w-6" />
                        <div>
                          <h3 className="font-semibold">Custom Server Builds</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">For small to enterprise-scale businesses</p>
                        </div>
                      </div>
                      <Button className="w-full">Design Your Custom PC</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
              <TabsContent value="networking">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Networking Equipment</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <Network className="h-6 w-6" />
                        <div>
                          <h3 className="font-semibold">Enterprise-grade Networking Gear</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Routers, switches, and modems</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Network className="h-6 w-6" />
                        <div>
                          <h3 className="font-semibold">Home Networking Solutions</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Wi-Fi systems and mesh networks</p>
                        </div>
                      </div>
                      <Button className="w-full">Browse Networking Equipment</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
              <TabsContent value="homelab">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Home Lab Kits</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <Server className="h-6 w-6" />
                        <div>
                          <h3 className="font-semibold">Pre-configured Home Lab Setups</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Ready-to-use lab environments</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Cpu className="h-6 w-6" />
                        <div>
                          <h3 className="font-semibold">Customizable Home Lab Configurations</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Networking and virtualization options</p>
                        </div>
                      </div>
                      <Button className="w-full">Explore Home Lab Kits</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Services</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <Printer className="h-8 w-8 mb-4" />
                    <CardTitle>3D Printing Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Custom 3D-printed components for hardware, prototyping services, and design-to-manufacture solutions.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CircuitBoard className="h-8 w-8 mb-4" />
                    <CardTitle>PCB Design & Custom Electronics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Custom PCB design and printing services, electronics prototyping, and components for DIY tech projects.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <Code className="h-8 w-8 mb-4" />
                    <CardTitle>Software Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Custom software for NAS, server, and network management, software integration services, and scalability solutions.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark: bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Why Choose SysForge Labs?</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Affordability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">High-quality tech without breaking the bank. We prioritize cost-effective solutions without compromising on performance.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Customization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Solutions tailored to your needs. We understand that one size doesn't fit all, especially in technology.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Serviceability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Long-term support and maintenance options. We're committed to ensuring your tech keeps running smoothly.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">What Our Customers Say</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>John Doe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">"SysForge Labs built me a custom NAS that perfectly fits my small business needs. Their support has been exceptional!"</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Jane Smith</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">"The home lab kit I got from SysForge has been a game-changer for my learning journey. Highly recommended!"</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Tech Innovations Inc.</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">"SysForge's enterprise networking solutions have significantly improved our company's infrastructure. Great service!"</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the SysForge Community</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Stay updated with our latest products, services, and tech tips.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 SysForge Labs. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}