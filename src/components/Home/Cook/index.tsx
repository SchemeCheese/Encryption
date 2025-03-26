"use client"
import Image from 'next/image';


const Algorithm = () => {

    return (
        <section className='relative' id="algorithm">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
                    <Image src={'/images/cook/burger.png'} alt="burger-image" width={463} height={622} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
                    <div className='col-span-6 flex justify-start'>
                        <Image src="/images/cook/istockphoto-1362081943-1024x1024.jpg" alt="nothing" width={636} height={808} />
                    </div>
                    <div className='col-span-6 flex flex-col justify-center'>
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start'>Algorithm</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
                        AES - Advanced Encryption Standard.
                        </h2>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2'>a highly trusted encryption algorithm used to secure data by converting it into an unreadable format without the proper key </p>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-1'>It is developed by the National Institute of Standards and Technology (NIST) in 2001. It is is widely used today as it is much stronger than DES and triple DES despite being harder to implement. AES encryption uses various key lengths (128, 192, or 256 bits) to provide strong protection against unauthorized access. This data security measure is efficient and widely implemented in securing internet communication, protecting sensitive data, and encrypting files. AES, a cornerstone of modern cryptography, is recognized globally for its ability to keep information safe from cyber threats.</p>
                        <a href="https://www.geeksforgeeks.org/advanced-encryption-standard-aes/" target="_blank" rel="noopener noreferrer">
                            <button className='text-xl font-medium rounded-full text-white py-5 px-6 bg-primary lg:px-10 mr-6 w-fit border border-primary hover:bg-transparent hover:text-primary'>Learn more</button>
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Algorithm;
