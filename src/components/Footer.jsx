import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} My Website. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer