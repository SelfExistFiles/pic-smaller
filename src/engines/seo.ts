import { useEffect } from "react";

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export const usePageSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Update page title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Update or create description meta tag
    if (seoData.description) {
      let descriptionMeta = document.querySelector('meta[name="description"]');
      if (!descriptionMeta) {
        descriptionMeta = document.createElement('meta');
        descriptionMeta.setAttribute('name', 'description');
        document.head.appendChild(descriptionMeta);
      }
      descriptionMeta.setAttribute('content', seoData.description);
    }

    // Update or create keywords meta tag
    if (seoData.keywords) {
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', seoData.keywords);
    }

    // Update or create canonical link tag
    if (seoData.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', seoData.canonical);
    }

    // Cleanup function, reset to default values when component unmounts
    return () => {
      // Here you can reset to default title and description, or keep current values
    };
  }, [seoData]);
};