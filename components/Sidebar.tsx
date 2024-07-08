'use client'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

// Ensure SiderbarProps is correctly defined or imported
interface SiderbarProps {
    user: {
        name: string;
        avatar: string;
    };
}

const Sidebar = ({ user }: SiderbarProps) => {

    const pathname = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Evergreen Logo"
                        className="size-[24px] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo">Evergreen</h1>
                </Link>

                {sidebarLinks.map((item) => {

                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                    return (
                        <Link href={item.route} key={item.label} className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}>
                            <div className='relative size-6'>
                                <Image 
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({
                                        'brightness-[3] invert-0': isActive
                                    })}
                                />
                            </div>
                            <p className={cn('sidebarlabel', {'!text-white': isActive})}>
                                {item.label}
                            </p>
                        </Link>
                    )

                })}

                USER
            </nav>

            FOOTER
        </section>
    );
};

export default Sidebar;
