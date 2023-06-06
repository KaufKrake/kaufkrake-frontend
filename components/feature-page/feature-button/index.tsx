import React from "react"

import { Button } from "../../ui/button"

interface FeatureButtonProps {
  text: string
}

const FeatureButton = ({ text }: FeatureButtonProps) => {
  return (
    <Button className="h-8 bg-gray-200 font-bold text-gray-400 hover:bg-gray-200">
      {text}
    </Button>
  )
}

export default FeatureButton
