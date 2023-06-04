import React from "react"

import FeatureHeader from "../../components/feature-page/feature-header"
import FeatureAllDevices from "../../components/feature-page/feature-sections/all-devices"
import FeatureShoppingList from "../../components/feature-page/feature-sections/shopping-list"
import FeatureTeamList from "../../components/feature-page/feature-sections/team-list"

const FeaturePage = () => {
  return (
    <div className="mb-20 flex flex-col items-center">
      <FeatureHeader />
      <FeatureTeamList />
      <FeatureShoppingList />
      <FeatureAllDevices />
    </div>
  )
}

export default FeaturePage
