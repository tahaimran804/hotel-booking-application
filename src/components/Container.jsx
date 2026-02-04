const Container = ({ className = '', children = '' }) => {
    return (
        <div className={`max-w-[1300px] mx-auto px-4 ${className}`}>{children}</div>
    );
};
export default Container;
