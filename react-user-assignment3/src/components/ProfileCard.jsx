import React, { useState } from "react";
import Delete from "../icons/Delete";
import Edit from "../icons/Edit";
import Email from "../icons/Email";
import Heart from "../icons/Heart";
import Phone from "../icons/Phone";
import Web from "../icons/Web";
import Modal from "./Modal";

export default function ProfileCard({ profileData, deleteUser }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState(profileData);
    const [formData, setFormData] = useState(profileData);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleFormChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        closeModal();
        setUser(formData);
    };

    const handleDelete = () => {
        deleteUser(user.id);
    };

    return (
        <div className="border">
            {/* Profile image */}
            <div className="flex justify-center bg-[#F5F5F5]">
                <img
                    className="h-48 w-48"
                    src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${user.name}&eyes=happy&eyebrows=default&mouth=smile`}
                    alt={`${user.name}'s avatar`}
                />
            </div>

            {/* Info and actions */}
            <div>
                {/* Info */}
                <div className="p-6">
                    <ul className="flex flex-col space-y-2 font-light">
                        <p className="font-medium">{user.name}</p>
                        <li className="flex items-center">
                            <span className="mr-2">
                                <Email />
                            </span>
                            {user.email}
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">
                                <Phone />
                            </span>
                            {user.phone}
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2">
                                <Web />
                            </span>
                            {user.website}
                        </li>
                    </ul>
                </div>

                {/* Actions */}
                <div className="flex bg-[#FAFAFA] border-t border-x-transparent py-4">
                    <div className="flex justify-center w-1/3 border-r border-gray-300">
                        <Heart />
                    </div>
                    <div
                        className="flex justify-center w-1/3 border-r border-gray-300 cursor-pointer"
                        onClick={openModal} // Open the modal when clicking the Edit icon
                    >
                        <Edit />
                    </div>
                    <div
                        className="flex justify-center w-1/3 cursor-pointer"
                        onClick={handleDelete} // Delete the user when the Delete icon is clicked
                    >
                        <Delete />
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 p-2 rounded focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />

                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 p-2 rounded focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block mb-1">
                            Phone
                        </label>
                        <input
                            type="text"
                            id="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            placeholder="Enter your phone number"
                            className="w-full border border-gray-300 p-2 rounded focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block mb-1">
                            Website
                        </label>
                        <input
                            type="text"
                            id="website"
                            value={formData.website}
                            onChange={handleFormChange}
                            placeholder="Enter your website"
                            className="w-full border border-gray-300 p-2 rounded focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 border-2 hover:bg-gray-100 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 focus:bg-blue-400 text-white rounded"
                        >
                            OK
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
