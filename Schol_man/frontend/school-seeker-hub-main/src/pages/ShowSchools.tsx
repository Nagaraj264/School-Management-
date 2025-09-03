import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import Navigation from "@/components/Navigation";

interface School {
  id: number;
  name: string;
  address: string;
  city: string;
  image: string;
}

const ShowSchools = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [schools, setSchools] = useState<School[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/testDB/getSchools")
      .then((res) => res.json())
      .then((data) => setSchools(data))
      .catch((err) => console.error("Error fetching schools:", err));
  }, []);

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Discover Schools</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through our directory of schools
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search schools by name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 shadow-elegant"
            />
          </div>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchools.map((school) => (
            <Card
              key={school.id}
              className="group hover:shadow-glow transition-all duration-300 border-0 bg-gradient-card backdrop-blur-sm overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
              <img
  src={school.image ? `http://localhost:3000${school.image}` : "https://via.placeholder.com/400x300"}
  alt={school.name}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>

              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {school.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{school.address}</span>
                    </div>
                  </div>

                  {/* Show only City */}
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">{school.city}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSchools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏫</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No schools found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowSchools;
