import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import CategoryTopicsList from '../components/CategoryTopicsList';

const CategoryPage: React.FC = () => {
  const { id } = useParams();
  // אם יש id בנתיב, מציגים רק את הנושאים של אותה קטגוריה
  if (id) {
    return <CategoryTopicsList />;
  }
  // אחרת מציגים את כל הקטגוריות
  return <CategoryList />;
};

export default CategoryPage;
