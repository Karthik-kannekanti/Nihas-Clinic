import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    image: "/figmaAssets/blog-s-1-10-600x341-jpg.png",
    author: "Babet",
    date: "Oct 05, 2025",
    title: "How To Look After Dogs Loved Ones\nhealthy Year-round",
  },
  {
    image: "/figmaAssets/blog-s-1-9-600x341-jpg.png",
    author: "Babet",
    date: "Oct 05, 2025",
    title: "Essential Tips For A Healthy Pet Life\nthroughout The Year",
  },
  {
    image: "/figmaAssets/blog-s-1-8-600x341-jpg.png",
    author: "Babet",
    date: "Oct 05, 2025",
    title: "Understanding Dog Behavior For\nbetter Communication",
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-[#f6f2ed]">
      <div className="container mx-auto px-12">
        <div className="flex flex-col items-center gap-4 mb-12">
          <Badge
            variant="outline"
            className="h-auto px-5 py-2 rounded-full border-2 border-[#167f74] bg-transparent"
            >
            <span className="[font-family:'Fredoka',Helvetica] font-medium text-[#167f74] text-base">
              News Posts
            </span>
          </Badge>

          <h2 className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-[56px] leading-[68px] text-center whitespace-nowrap">
            Latest News articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-white rounded-[30px] overflow-hidden border-0 shadow-sm"
            >
              <CardContent className="p-0">
                <div
                  className="w-full h-[283px] rounded-[30px] m-2.5 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />

                <div className="px-9 pt-6 pb-8">
                  <div className="flex items-center gap-8 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="[font-family:'Font_Awesome_5_Free-Solid',Helvetica] text-[#167f74] text-base"></span>
                      <span className="[font-family:'Onest',Helvetica] font-normal text-[#74787c] text-base leading-[26px]">
                        {post.author}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="[font-family:'Font_Awesome_5_Free-Solid',Helvetica] text-[#167f74] text-base"></span>
                      <span className="[font-family:'Onest',Helvetica] font-normal text-[#74787c] text-base leading-[26px]">
                        {post.date}
                      </span>
                    </div>
                  </div>

                  <h3 className="[font-family:'Fredoka',Helvetica] font-semibold text-[#02000f] text-[22px] leading-[29.3px] mb-6 whitespace-pre-line">
                    {post.title}
                  </h3>

                  <div className="pt-6 border-t border-[#4e4e4e33]">
                    <Button
                      variant="link"
                      className="h-auto p-0 text-[#167f74] [font-family:'Onest',Helvetica] font-normal text-lg hover:no-underline"
                    >
                      Read More
                      <ArrowRightIcon className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
