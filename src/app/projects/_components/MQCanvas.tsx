'use client';

import { useId, useState } from 'react';
import styles from './MQCanvas.module.css';

export type MQCanvasProps = {
  title: string;
  summary?: string;
  src: string;
  aspect?: string;
  width?: number;
  sourceCode?: string; // Source code for emgithub blob
};

export default function MQCanvas({
  title,
  summary,
  src,
  aspect = '3/2',
  width,
  sourceCode,
}: MQCanvasProps) {
  const id = useId();
  // If you provide aspect, we’ll use CSS aspect-ratio; otherwise fixed width.
  const style = aspect ? { aspectRatio: aspect } : { width: width ?? 600 };

  // Toggle source code
  const [showCode, setShowCode] = useState(false);
  const toggleCode = () => setShowCode((v) => !v);

  return (
    <figure
      className={styles.wrapper}
      aria-labelledby={`cap-${id}`}>
      <figcaption
        id={`cap-${id}`}
        className={styles.caption}>
        <strong>{title}</strong>
        <div
          className={styles.frame}
          style={style}>
          <iframe
            src={src}
            title={title}
            loading="lazy"
          />
        </div>
        <button onClick={toggleCode}>
          {showCode ? 'Hide' : 'Show'} Source Code
        </button>
        {summary ? (
          <div
            className={styles.summary}
            dangerouslySetInnerHTML={{ __html: summary }}></div>
        ) : null}
        {sourceCode && showCode ? (
          <iframe
            className={styles.sourceCode}
            style={style}
            allow="clipboard-write"
            src={sourceCode}></iframe>
        ) : null}
      </figcaption>
    </figure>
  );
}
