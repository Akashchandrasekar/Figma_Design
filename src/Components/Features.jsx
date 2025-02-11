import React from 'react';

const Features = () => {
    return (
        <div className="container mx-auto px-4 py-4">
            <p className="text-red-600 font-bold text-lg">Features</p>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold py-3 mb-3">New Arrival</h1>
            </div>

            {/* Main Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Left Side - Full Width Image */}
                <div className="relative">
                    <img 
                        src="https://www.notebookcheck.com/fileadmin/Notebooks/News/_nc3/ps5_slim.jpg" 
                        alt="ps5Name" 
                        className="w-full h-96 object-cover rounded-md" 
                    />
                    <div className="absolute top-48 left-6 text-white">
                        <h1 className="text-3xl font-bold">PlayStation 5</h1>
                        <p className="mt-2 text-lg">Black and White version of the PS5 coming out on sale.</p>
                        <button className="underline mt-3 text-lg cursor-pointer">Shop Now</button>
                    </div>
                </div>

                {/* Right Side - Grid Layout */}
                <div className="grid gap-4">
                    
                    {/* First Image - Full Width */}
                    <div className="relative">
                        <img 
                            src="https://static.vecteezy.com/system/resources/thumbnails/053/611/622/small_2x/elegant-young-woman-in-wide-brimmed-hat-on-grey-background-concept-of-timeless-fashion-chic-style-classic-elegance-black-and-white-copy-space-copy-space-photo.jpeg" 
                            alt="ps5Name" 
                            className="w-full h-48 object-cover rounded-md" 
                        />
                        <div className="absolute top-25 left-3 text-white">
                            <h1 className="text-lg font-bold">Women’s Collections</h1>
                            <p className="text-sm">Featured woman collections that give you another vibe.</p>
                            <button className="underline text-sm mt-1 cursor-pointer">Shop Now</button>
                        </div>
                    </div>

                    {/* Two Smaller Images in a Single Row */}
                    <div className="grid grid-cols-2 gap-4">
                        
                        {/* First Small Image */}
                        <div className="relative">
                            <img 
                                src="https://img.freepik.com/premium-photo/voice-controlled-smart-speaker-standing-black-background-concept-technology-electronics-3d-rendering-mock-up_780608-19324.jpg" 
                                alt="ps5Name" 
                                className="w-full h-36 object-cover rounded-md" 
                            />
                            <div className="absolute top-17 left-3 text-white">
                                <h1 className="text-sm font-bold">Speakers</h1>
                                <p className="text-xs">Amazon wireless speakers</p>
                                <button className="underline text-xs mt-1 cursor-pointer">Shop Now</button>
                            </div>
                        </div>

                        {/* Second Small Image */}
                        <div className="relative">
                            <img 
                                src="https://static.vecteezy.com/system/resources/thumbnails/055/275/775/small_2x/captivating-perfume-bottle-illuminated-with-soft-golden-light-in-a-dark-setting-photo.jpeg" 
                                alt="ps5Name" 
                                className="w-full h-36 object-cover rounded-md" 
                            />
                            <div className="absolute top-17 left-3 text-white">
                                <h1 className="text-sm font-bold">Perfume</h1>
                                <p className="text-xs">GUCCI INTENSE OUD EDP</p>
                                <button className="underline text-xs mt-1 cursor-pointer">Shop Now</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Features;
