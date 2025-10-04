import Header from '@/components/header';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
    return (
        <main className='min-h-screen text-gray-400'>
            <Header />
            <div className="container py-10">
                {children}
            </div>
            
        </main>
    )
}
export default Layout