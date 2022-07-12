import React from 'react'
import { useRouter } from 'next/router'
type Props = {}

const ModiRecipe = (props: Props) => {
    const router = useRouter()
    const { recipeId } = router.query
    return <div>ModiRecipe {recipeId}</div>
}

export default ModiRecipe
