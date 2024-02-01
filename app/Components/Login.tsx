"use client"

import React, { useState } from 'react';
// import { useSession } from '../CustomHooks/SessionContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const { login } = useSession();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Envoyez une requête POST au serveur avec les informations d'identification (email et mot de passe)
        try {
            const response = await fetch('http://localhost:3000/connexion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // La connexion a réussi, redirigez l'utilisateur vers son profil ou effectuez toute autre action nécessaire
                // Par exemple, vous pouvez utiliser react-router-dom pour la navigation
                // login()
                //window.location.href = '/'; En redirigeant cela fait relancer tout le site web et remet la valeur du useContext à false
                // car la ressource à fetch: Error: NetworkError when attempting to fetch resource.
                //Pour l'instant ne pas redirigé permet de garder la valeur à true.
            } else {
                // La connexion a échoué, affichez un message d'erreur à l'utilisateur
                console.error('Échec de la connexion');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-2xl font-semibold text-center text-gray-700">
                    Connexion
                </h1>
                <form className="mt-6" onSubmit={handleLogin}>
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-600">
                            Se connecter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
