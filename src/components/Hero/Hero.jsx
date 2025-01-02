import "./Hero.css";

export default function Hero() {
    return (
        <>
            <section className="bg-gray-100 text-center py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Welcome to the Inventory System</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Manage your inventory effortlessly with our intuitive platform.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                        Get Started
                    </button>
                </div>
            </section>
        </>
    );
}