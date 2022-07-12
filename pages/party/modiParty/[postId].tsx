import React from 'react'
import { useRouter } from 'next/router'
type Props = {}

const ModiParty = (props: Props) => {
    const router = useRouter()
    const { postId } = router.query

    return <div>ModiParty{postId}</div>
}

export default ModiParty
