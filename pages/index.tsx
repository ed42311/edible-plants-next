import React, { ReactElement } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Rocket = styled.div`
  text-align: center;
  img {
    width: 630px;
  }
`

export default function Index(): ReactElement {
  return (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Rocket>
        <img src="https://media.giphy.com/media/QbumCX9HFFDQA/giphy.gif" />
      </Rocket>
    </div>
  )
}
