import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import photo from '../media/producticon.png'

const MementoTitle = () => {
  return (
    <Link href="https://memento.knotbin.xyz" style={{
      display: 'block',
      width: '100%',
      maxWidth: '1000px',
      margin: '60px auto',
      textDecoration: 'none',
      color: 'inherit'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <div style={{ flexShrink: 0 }}>
          <Image
            src={photo}
            alt="Memento App Icon"
            width={180}
            height={180}
          />
        </div>
        <div>
          <h1 style={{ 
            fontSize: '92px', 
            fontWeight: '700', 
            margin: '0',
            lineHeight: '1.1'
          }}>
            Memento
          </h1>
          <p style={{ 
            fontSize: '48px', 
            margin: '15px 0 0',
            fontWeight: '300'
          }}>
            Your Mental Inbox
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MementoTitle;