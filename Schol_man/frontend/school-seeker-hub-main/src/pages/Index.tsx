import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Plus, Search, Users, Award, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-foreground/10 rounded-full mb-6 backdrop-blur-sm">
                <GraduationCap className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Find Your Perfect
                <span className="block bg-gradient-to-r from-education-orange to-education-green bg-clip-text text-transparent">
                  School Match
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-lg">
                Discover and compare educational institutions in your area. From kindergarten to high school, find the perfect learning environment for your child.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow">
                  <Link to="/schools">
                    <Search className="w-5 h-5 mr-2" />
                    Browse Schools
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/add-school">
                    <Plus className="w-5 h-5 mr-2" />
                    Add School
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={heroImage} 
                  alt="Students learning together" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose SchoolSeeker?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make finding the right school simple, transparent, and comprehensive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-education-blue/10 rounded-full mb-6">
                  <Search className="w-8 h-8 text-education-blue" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Easy Search</h3>
                <p className="text-muted-foreground">
                  Search schools by location, curriculum, or special programs. Find exactly what you're looking for.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-education-green/10 rounded-full mb-6">
                  <Users className="w-8 h-8 text-education-green" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Community Driven</h3>
                <p className="text-muted-foreground">
                  Schools and parents contribute to keep information accurate and up-to-date.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-education-purple/10 rounded-full mb-6">
                  <Award className="w-8 h-8 text-education-purple" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Quality Assured</h3>
                <p className="text-muted-foreground">
                  Verified information and comprehensive details about each educational institution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <MapPin className="w-16 h-16 text-primary-foreground mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Start Your School Search Today
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join thousands of parents who have found their perfect school match through SchoolSeeker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow">
                <Link to="/schools">
                  Get Started Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/add-school">
                  List Your School
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
