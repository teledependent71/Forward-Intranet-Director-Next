import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Forward Intranet Director</title>
          <meta
            property="og:title"
            content="test-page - Forward Intranet Director"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_9talw) => (
            <>
              <h1>{context_9talw?.Name}</h1>
            </>
          )}
          initialData={props.context9talwProp}
          persistDataDuringLoading={true}
          key={props?.context9talwProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context9talwProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        context9talwProp: context9talwProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
