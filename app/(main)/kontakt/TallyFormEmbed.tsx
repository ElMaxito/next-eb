// app/(main)/kontakt/TallyFormEmbed.tsx
'use client';

import React, { useState, useEffect, Component } from 'react';

class FormErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-8 text-gray-600">
          Das Kontaktformular konnte nicht geladen werden. 
          Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt 
          unter info@elke-bitterhof.de
        </div>
      );
    }

    return this.props.children;
  }
}

function TallyForm() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="h-[228px] flex items-center justify-center text-gray-600">
          Wird geladen...
        </div>
      )}
      <iframe 
        style={{ display: isLoading ? 'none' : 'block' }}
        data-tally-src="https://tally.so/embed/m612BJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="228"
        frameBorder="0"
        title="Kontaktformular"
        className="w-full"
        onError={() => {
          throw new Error('Form failed to load');
        }}
      />
    </>
  );
}

export default function TallyFormEmbed() {
  return (
    <FormErrorBoundary>
      <TallyForm />
    </FormErrorBoundary>
  );
}