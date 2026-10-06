import React, { useState } from 'react';
import profile from '../data/profile.json'
import { Download } from 'lucide-react';
import { getAssetUrl } from '../utils/assetsUtils';
import { useTranslation } from 'react-i18next';

const ContactModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false)
  const [statusMessage, setStatusMessage] = useState("");
  const EMPTY_SENDER = {
    name: '',
    email: '',
    message: ''
  }
  const [sender, setSender] = useState(EMPTY_SENDER);

  // Fonction pour copier l'adresse e-mail
  const handleCopyEmail = async (email='') => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset le bouton après 2s
    } catch (err) {
      console.error("Erreur lors de la copie : ", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setIsSending(true);

    // Récupération des données du formulaire
    // const formData = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   message: e.target.message.value,
    // };

    if (!sender.name || !sender.email || !sender.message) {
      setStatusMessage(t('contact.validationError'))
      setIsSending(false)
      setTimeout(() => setStatusMessage(''), 5 * 1000)
      return
    }

    try {
      // Exemple avec Formspree ou un service similaire
      const response = await fetch("https://formspree.io/f/xdavwrvk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(formData),
        body: JSON.stringify(sender)
      });

      // Simulation d'envoi API (À décommenter si tu branches Formspree plus tard)
      // await new Promise(resolve => setTimeout(resolve, 1500));
      // const response = {
      //   ok: false
      // }

      if (response.ok) {
        setStatusMessage(t('contact.successMessage'));
        // e.target.reset(); // Vide le formulaire
        setSender(EMPTY_SENDER)
      } else {
        setStatusMessage(t('contact.submitError'));
      }
    } catch (error) {
      setStatusMessage(t('contact.connectionError'));
    } finally {
      setIsSending(false);
      setTimeout(() => setStatusMessage(''), 5 * 1000)
    }
  };

  // Empêche l'affichage si le modal est fermé
  if (!isOpen) return null;

  return (
    <>
      <div className='z-2000'>
        {/* Arrière-plan sombre (Backdrop) */}
        <div 
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Fenêtre principale (Modal style Drawer bas de page) */}
        <div 
          role="dialog" 
          aria-modal="true"
          className="fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col border border-zinc-100 bg-white max-h-[90vh] rounded-t-3xl shadow-2xl transition-transform duration-300 transform translate-y-0"
        >
          {/* Petite barre grise de glissement (visual anchor) */}
          <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-zinc-200"></div>

          {/* Zone de contenu défilable */}
          <div className="mx-auto w-full max-w-lg overflow-y-auto">
            
            {/* EN-TÊTE DU MODAL */}
            <div className="grid gap-1.5 p-4 text-center sm:text-left relative pt-6 pb-4">
              {/* Bouton Fermer */}
              <button 
                onClick={onClose}
                className="absolute cursor-pointer right-4 top-4 w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2b75f]" 
                type="button" 
                aria-label={t('contact.closeFormAriaLabel')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-zinc-600">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>

              <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900">{t('contact.title')}</h2>
                
                {/* Bouton Télécharger le CV (Converti en balise <a> pour être valide en HTML) */}
                <a 
                  href={getAssetUrl(profile.cv.url)}
                  download={`CV_${profile.name.replace(/\s+/g, '_')}.pdf`} // Renomme proprement le fichier au téléchargement (ex: CV_KOFFI_Flaimoiyé.pdf)
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-1.5 rounded-full bg-zinc-100 text-xs font-medium text-zinc-800 hover:bg-zinc-200 transition-colors inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#f2b75f]" 
                  aria-label={t('contact.downloadCvAriaLabel')}
                >
                  {/* Icône de téléchargement */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-3.5 h-3.5"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                  {t('contact.downloadCv')}
                </a>
              </div>
              
              <p className="text-sm text-zinc-500 mt-1">
                {t('contact.introduction')}
              </p>
            </div>

            {/* CORPS DU MODAL */}
            <div className="px-4 pb-8 space-y-6">
              
              {/* Boîtier E-mail avec Option Copier */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100 gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-700">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <span className="text-zinc-800 text-sm font-medium break-all">{profile.contacts.email}</span>
                </div>
                
                <button 
                  onClick={() => handleCopyEmail(profile.contacts.email)}
                  className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#f2b75f] ${
                    copied ? 'bg-green-600 text-white' : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                  type="button" 
                  aria-label={t('contact.copyEmailAriaLabel')}
                >
                  {!copied && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                  )}
                  {copied ? t('contact.copied') : t('contact.copy')}
                </button>
              </div>

              {/* Boutons Réseaux Sociaux (GitHub / LinkedIn) */}
              <div className="flex gap-3">
                <a href={`${profile.socials.github.url}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2b75f]" aria-label={t('contact.githubAriaLabel')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-800">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span className="font-medium text-zinc-800 text-sm">{t('contact.githubName')}</span>
                </a>
                
                <a href={`${profile.socials.linkedin.url}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2b75f]" aria-label={t('contact.linkedinAriaLabel')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="font-medium text-zinc-800 text-sm">{t('contact.linkedinName')}</span>
                </a>
              </div>

              {/* Status Disponibilité */}
              <div className="p-4 rounded-2xl bg-zinc-50/50 border border-dashed border-zinc-200 space-y-1">
                <div className="flex items-center gap-2">
                  {/* <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping absolute" aria-hidden="true"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 relative" aria-hidden="true"></div> */}
                  <div className="status-dot" aria-hidden="true"></div>
                  <span className="text-sm font-medium text-zinc-900">{profile.status.label}</span>
                </div>
                <p className="text-xs text-zinc-400 pl-4.5">{profile.status.meta}</p>
              </div>

              {/* Message de statut (succès ou erreur) */}
              {statusMessage && (
                <p className="text-center text-sm font-medium mt-2">{statusMessage}</p>
              )}

              {/* FORMULAIRE DE CONTACT */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="sr-only">{t('contact.nameLabel')}</label>
                  <input 
                    value={sender.name}
                    onChange={(e) => setSender({...sender, name: e.target.value})}
                    id="name" 
                    type="text" 
                    placeholder={t('contact.namePlaceholder')} 
                    required 
                    className="w-full h-12 px-4 rounded-2xl border border-zinc-200 focus:outline-none focus:border-[#f2b75f] focus:ring-1 focus:ring-[#f2b75f] text-zinc-800 placeholder-zinc-400 text-sm bg-zinc-50/30 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="sr-only">{t('contact.emailLabel')}</label>
                  <input 
                    value={sender.email}
                    onChange={(e) => setSender({...sender, email: e.target.value})}
                    id="email" 
                    type="email" 
                    placeholder={t('contact.emailPlaceholder')} 
                    required 
                    className="w-full h-12 px-4 rounded-2xl border border-zinc-200 focus:outline-none focus:border-[#f2b75f] focus:ring-1 focus:ring-[#f2b75f] text-zinc-800 placeholder-zinc-400 text-sm bg-zinc-50/30 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="sr-only">{t('contact.messageLabel')}</label>
                  <textarea
                    value={sender.message}
                    onChange={(e) => setSender({...sender, message: e.target.value})}
                    id="message" 
                    placeholder={t('contact.messagePlaceholder')} 
                    required 
                    rows="4" 
                    className="w-full p-4 rounded-2xl border border-zinc-200 focus:outline-none focus:border-[#f2b75f] focus:ring-1 focus:ring-[#f2b75f] text-zinc-800 placeholder-zinc-400 text-sm bg-zinc-50/30 resize-none transition-all"
                  ></textarea>
                </div>

                {/* Bouton Soumettre */}
                {/* <button 
                  type="submit" 
                  className="w-full h-14 rounded-2xl bg-[#f2b75f] text-zinc-950 font-semibold flex items-center justify-center gap-2 hover:bg-[#e0a24a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f2b75f] focus:ring-offset-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                  Send Message
                </button> */}

                <button 
                  type="submit" 
                  disabled={isSending} // Désactive le bouton pendant l'envoi
                  className="w-full h-14 rounded-2xl bg-[#f2b75f] text-zinc-950 font-semibold flex items-center justify-center gap-2 hover:bg-[#e0a24a] disabled:opacity-50 transition-colors"
                  onClick={handleSubmit}
                >
                  {isSending ? t('contact.sending') : t('contact.sendMessage')}
                </button>

                {/* Message de statut (succès ou erreur) */}
                {/* {statusMessage && (
                  <p className="text-center text-sm font-medium mt-2">{statusMessage}</p>
                )} */}
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;