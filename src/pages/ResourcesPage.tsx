import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Resource } from '../types/resources';
import { fetchResources } from '../api/resources';
import ResourceList from '../components/resources/ResourceList';
import SearchBar from '../components/resources/SearchBar';
import CategoryFilter from '../components/resources/CategoryFilter';

const ResourcesPage = () => {
  const { grade } = useParams<{ grade: string }>();
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadResources = async () => {
      try {
        setLoading(true);
        const data = await fetchResources();
        setResources(data.resources);
      } catch (err) {
        setError('Kaynaklar yüklenirken bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    loadResources();
  }, []);

  const filteredResources = resources.filter((resource) => {
    if (grade && resource.grade !== parseInt(grade)) {
      return false;
    }
    if (selectedCategory && resource.category !== selectedCategory) {
      return false;
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        resource.title.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    return true;
  });

  const categories = [...new Set(resources.map(resource => resource.category))];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Yükleniyor...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            {grade ? `${grade}. Sınıf Kaynakları` : 'Tüm Kaynaklar'}
          </h1>

          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <ResourceList resources={filteredResources} />
        </motion.div>
      </div>
    </div>
  );
};

export default ResourcesPage;