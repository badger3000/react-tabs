import React from 'react';
import Tabs from './Tabs';

function App() {
  const heroTabs = [
    { 
      title: 'All',
      content: <div>All resources and content</div>
    },
    { 
      title: 'Guidance',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      content: <div>Expert guidance and best practices for RIAs</div>
    },
    { 
      title: 'Case Studies',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      content: <div>Real-world examples and success stories</div>
    },
    { 
      title: 'Company Insights',
      image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400&h=300&fit=crop',
      content: <div>Latest updates and industry analysis</div>
    },
    { 
      title: 'Podcasts',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop',
      content: <div>Audio content and interviews</div>
    }
  ];

  return (
    <div className="App">
      <main>
        <Tabs tabs={heroTabs} />
      </main>
    </div>
  );
}

export default App;
