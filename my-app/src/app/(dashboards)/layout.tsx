const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-12">
        <div className="col-span-3 bg-gray-400 h-[80vh]">
            <ul>
                <li>Home</li>
                <li>Payment</li>
                <li>Help</li>
            </ul>
        </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
