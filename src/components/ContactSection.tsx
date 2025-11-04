import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Mail, Phone, MessageCircle, Check } from 'lucide-react';
import { biodata } from '../data/biodata';

const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${biodata.personal.name} - Marriage Biodata`,
          text: `Check out ${biodata.personal.name}'s marriage biodata`,
          url: url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadPDF = () => {
    // Create a simple PDF generation function
    const printContent = `
      <html>
        <head>
          <title>${biodata.personal.name} - Marriage Biodata</title>
          <style>
            body { font-family: 'Poppins', sans-serif; margin: 40px; color: #333; }
            .header { text-align: center; margin-bottom: 30px; }
            .section { margin-bottom: 25px; }
            .section h2 { color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 5px; }
            .info-item { margin: 10px 0; }
            .label { font-weight: 600; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${biodata.personal.name}</h1>
            <p>${biodata.personal.tagline}</p>
          </div>
          
          <div class="section">
            <h2>Basic Details</h2>
            <div class="info-item"><span class="label">Age:</span> ${biodata.personal.age} years</div>
            <div class="info-item"><span class="label">Height:</span> ${biodata.personal.height}</div>
            <div class="info-item"><span class="label">Education:</span> ${biodata.personal.education}</div>
            <div class="info-item"><span class="label">Occupation:</span> ${biodata.personal.occupation}</div>
            <div class="info-item"><span class="label">Location:</span> ${biodata.personal.location}</div>
          </div>
          
          <div class="section">
            <h2>Family Details</h2>
            <div class="info-item"><span class="label">Father:</span> ${biodata.family.father.name} - ${biodata.family.father.occupation}</div>
            <div class="info-item"><span class="label">Mother:</span> ${biodata.family.mother.name} - ${biodata.family.mother.occupation}</div>
            <div class="info-item"><span class="label">Siblings:</span> ${biodata.family.siblings}</div>
          </div>
          
          <div class="section">
            <h2>Contact Information</h2>
            <div class="info-item"><span class="label">Email:</span> ${biodata.contact.email}</div>
            <div class="info-item"><span class="label">Phone:</span> ${biodata.contact.phone}</div>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.print();
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in knowing more? Feel free to reach out or share my profile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Download PDF Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            onClick={handleDownloadPDF}
            className="primary-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 card-hover group"
          >
            {downloaded ? (
              <>
                <Check className="w-6 h-6" />
                <span>PDF Generated!</span>
              </>
            ) : (
              <>
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                <span>Download Biodata (PDF)</span>
              </>
            )}
          </motion.button>

          {/* Share Profile Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={handleShare}
            className="glass-effect text-text px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 card-hover group border-2 border-primary/20"
          >
            {copied ? (
              <>
                <Check className="w-6 h-6 text-green-600" />
                <span className="text-green-600">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-6 h-6 text-primary group-hover:animate-pulse" />
                <span>Share My Profile</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-effect rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-text mb-6 text-center">Contact Information</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.a
              href={`mailto:${biodata.contact.email}`}
              className="flex flex-col items-center p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-8 h-8 text-primary mb-3 group-hover:animate-pulse" />
              <span className="font-semibold text-text">Email</span>
              <span className="text-sm text-gray-600 text-center">{biodata.contact.email}</span>
            </motion.a>

            <motion.a
              href={`tel:${biodata.contact.phone}`}
              className="flex flex-col items-center p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-8 h-8 text-accent mb-3 group-hover:animate-pulse" />
              <span className="font-semibold text-text">Phone</span>
              <span className="text-sm text-gray-600 text-center">{biodata.contact.phone}</span>
            </motion.a>

            <motion.a
              href={`https://wa.me/${biodata.contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-white/50 hover:bg-white/70 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-8 h-8 text-green-600 mb-3 group-hover:animate-pulse" />
              <span className="font-semibold text-text">WhatsApp</span>
              <span className="text-sm text-gray-600 text-center">{biodata.contact.whatsapp}</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <p className="text-gray-600">
            <span className="font-semibold">Note:</span> Please contact only if you are genuinely interested 
            and looking for a serious relationship. Family involvement is welcome and appreciated.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;