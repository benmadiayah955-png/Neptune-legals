import { supabase } from "./supabase.js";

export async function connexionDiscord() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: "discord",
        options: {
            redirectTo: window.location.origin + "/dashboard.html"
        }
    });

    if (error) {
        console.error(error);
        alert("Impossible de se connecter avec Discord.");
    }
}

export async function utilisateurConnecte() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        console.error(error);
        return null;
    }

    return data.session;
}

export async function protegerPage() {
    const session = await utilisateurConnecte();

    if (!session) {
        window.location.href = "connexion.html";
        return null;
    }

    return session;
}

export async function deconnexion() {
    await supabase.auth.signOut();
    window.location.href = "connexion.html";
}
