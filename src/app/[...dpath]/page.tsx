import React from 'react';

interface PageProps {
  params: {
    dpath: Array<string | number | boolean | React.ReactNode>;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      <ul>
        {params.dpath.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
