import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FolderIcon, TagIcon, SearchIcon } from "lucide-react";

export default function IndexPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      {/* Header Section */}
      <motion.section 
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          Markdown Note-Taking App
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Organize Your Thoughts
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Create, organize, and search your notes with ease.
        </p>
      </motion.section>

      {/* Search Bar */}
      <div className="flex justify-center">
        <Input 
          type="text" 
          placeholder="Search notes..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md"
        />
        <Button variant="ghost" size="icon">
          <SearchIcon className="h-5 w-5" />
        </Button>
      </div>

      {/* Folders and Tags */}
      <div className="flex justify-around">
        <Button variant="outline" className="flex items-center">
          <FolderIcon className="mr-2 h-5 w-5" /> Manage Folders
        </Button>
        <Button variant="outline" className="flex items-center">
          <TagIcon className="mr-2 h-5 w-5" /> Manage Tags
        </Button>
      </div>

      {/* Notes Section */}
      <div className="mt-8">
        {/* Placeholder for notes list */}
        <p className="text-center text-gray-500">No notes available. Start by creating a new note!</p>
      </div>
    </div>
  );
}
