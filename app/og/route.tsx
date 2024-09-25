import { ImageResponse } from 'next/og'
import { ReactElement } from 'react'

// The GET handler is an async function
export async function GET(request: Request) {

  // Get the title from the request's URL search params
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || "Knotbin"

  // Return the ImageResponse with the correct font included
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          fontSize: 30,
          color: 'black',
          paddingTop: 50,
          WebkitTextSizeAdjust: 'none',
          fontFamily: '"SF Pro", sans-serif', // Use the custom font here
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 48,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <img
            alt="avatar"
            width={200}
            src={`https://github.com/user-attachments/assets/c1aacd80-779e-4ec4-994b-384357124514`}
            style={{
              borderRadius: 128,
              margin: 50,
            }}
          /> 
          <h1
            style={{
              fontWeight: 900,
              textAlign: 'left',
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // fonts: [
      //   {
      //     name: 'SF Pro', // Name of the custom font
      //     data: fontData1, // Font data fetched earlier
      //     style: 'normal',
      //   },
      // ],
    }
  )
}
