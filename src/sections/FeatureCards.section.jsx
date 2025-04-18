import React from 'react'
import { abilities } from '../utils/data'

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg mb-2">
        <div className="mx-auto grid-3-cols">
            {abilities.map(({ imgPath, title, desc }) => (
                <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                    <div className="size-14 flex items-center justify-center rounded-full">
                        <img src={imgPath} alt={title} />
                    </div>
                    <h3 className="text-white text-2xl font-semibold mb-2 pointer-events-none">
                        {title}
                    </h3>
                    <p className="text-white-50 text-lg pointer-events-none">
                        {desc}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureCards