import React from 'react';
import { useContent } from '../ContentContext';

/**
 * Injects global CSS variables based on the website content configuration.
 * This allows real-time preview of styling changes in the admin panel.
 */
export default function DynamicStyleManager() {
  const { content } = useContent();
  const { designSettings } = content;

  if (!designSettings) return null;

  const cssVariables = `
    :root {
      --primary-color: ${designSettings.primaryColor};
      --accent-color: ${designSettings.accentColor};
      --font-heading: "${designSettings.fontFamilyTitle}", sans-serif;
      --font-body: "${designSettings.fontFamilyBody}", sans-serif;
      --border-radius: ${designSettings.borderRadius};
      --title-color: ${designSettings.titleColor || '#0a1e36'};
      --body-color: ${designSettings.bodyColor || '#4b5563'};
      --font-base-size: ${designSettings.fontSizeBase};
      --font-weight-title: ${designSettings.headingWeight || '800'};
      --font-weight-body: ${designSettings.bodyWeight || '400'};
    }

    body {
      font-family: var(--font-body);
      font-size: var(--font-base-size);
      color: var(--body-color);
      font-weight: var(--font-weight-body);
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-heading);
      color: var(--title-color);
      font-weight: var(--font-weight-title);
    }

    .btn-primary, .btn-outline {
      border-radius: ${designSettings.buttonStyle === 'pill' ? '999px' : designSettings.buttonStyle === 'rounded' ? (designSettings.borderRadius || '8px') : '0'};
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: cssVariables }} />;
}
