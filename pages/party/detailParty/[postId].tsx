import React from 'react'
import { useRouter } from 'next/router'
type Props = {}

const DetailParty = (props: Props) => {
    const router = useRouter()
    const { postId } = router.query
    return <div>detailParty{postId}</div>
}

export default DetailParty
