export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-1/3 bg-white rounded-lg p-4">
                <div className="flex justify-between items-center mb-4 p-1 border-b">
                    <h2 className="text-lg font-medium">Edit Profile</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-black">
                        ✕
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
