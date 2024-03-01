export default function LayOutPage({
                                       children,
                                        className
                                   }: Readonly<{
    children: React.ReactNode;
    className: string
}>) {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
            {children}
        </div>
    )
}