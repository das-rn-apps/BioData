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
    const family = biodata.family;
    const personal = biodata.personal;
    const personalInfo = biodata.personalInfo;
    const contact = biodata.contact;

    const printContent = `
  <html>
    <head>
      <title>${personal.name} - Marriage Biodata</title>
      <style>
        body {
          font-family: 'Poppins', sans-serif;
          color: #333;
          margin: 40px;
          line-height: 1.6;
          background: #faf9ff;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .profile-img {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #8b5cf6;
          margin-bottom: 15px;
        }
        h1 {
          margin: 10px 0 5px;
          color: #4b0082;
        }
        h2 {
          color: #8b5cf6;
          border-bottom: 2px solid #8b5cf6;
          padding-bottom: 5px;
          margin-top: 30px;
        }
        .info-item {
          margin: 6px 0;
        }
        .label {
          font-weight: 600;
          color: #555;
        }
        ul {
          list-style-type: disc;
          margin: 6px 0 6px 25px;
        }
        .section {
          margin-bottom: 25px;
        }
        .footer {
          text-align: center;
          font-size: 13px;
          color: #777;
          margin-top: 40px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <img src="${personal.profileImage}" alt="Profile" class="profile-img" />
        <h1>${personal.name}</h1>
        <p>${personal.tagline}</p>
      </div>

      <div class="section">
        <h2>Personal Details</h2>
        <div class="info-item"><span class="label">Date of Birth:</span> ${personal.dateOfBirth}</div>
        <div class="info-item"><span class="label">Age:</span> ${personal.age} years</div>
        <div class="info-item"><span class="label">Height:</span> ${personal.height}</div>
        <div class="info-item"><span class="label">Religion:</span> ${personal.religion}</div>
        <div class="info-item"><span class="label">Caste:</span> ${personal.caste}</div>
        <div class="info-item"><span class="label">Education:</span> ${personal.education}</div>
        <div class="info-item"><span class="label">Occupation:</span> ${personal.occupation} at ${personal.company}</div>
        <div class="info-item"><span class="label">Address:</span> ${personal.address}</div>
        <div class="info-item"><span class="label">Current Location:</span> ${personal.location}</div>
      </div>

      <div class="section">
        <h2>Family Details</h2>
        <div class="info-item"><span class="label">Grandfather:</span> ${family.grandfather.name} - ${family.grandfather.occupation}</div>
        <div class="info-item"><span class="label">Grandmother:</span> ${family.grandmother.name} - ${family.grandmother.occupation}</div>
        <div class="info-item"><span class="label">Father:</span> ${family.father.name} - ${family.father.occupation}</div>
        <div class="info-item"><span class="label">Mother:</span> ${family.mother.name} - ${family.mother.occupation}</div>

        <div class="info-item"><span class="label">Siblings:</span></div>
        <ul>
          <li>${family.brother.name} - ${family.brother.occupation}</li>
          <li>${family.sister1.name} - ${family.sister1.occupation}</li>
          <li>${family.sister2.name} - ${family.sister2.occupation}</li>
        </ul>
      </div>

      <div class="section">
        <h2>Personal Interests</h2>
        <div class="info-item"><span class="label">Hobbies:</span></div>
        <ul>${personalInfo.hobbies.map(h => `<li>${h}</li>`).join('')}</ul>
        <div class="info-item"><span class="label">Personality:</span> ${personalInfo.personality}</div>
      </div>

      <div class="section">
        <h2>Partner Preferences</h2>
        <p>${personalInfo.partnerPreferences}</p>
      </div>

      <div class="section">
        <h2>Contact Information</h2>
        <div class="info-item"><span class="label">Email:</span> ${contact.email}</div>
        <div class="info-item"><span class="label">Phone:</span> ${contact.phone}</div>
        <div class="info-item"><span class="label">WhatsApp:</span> ${contact.whatsapp}</div>
      </div>

      <div class="footer">
        <p>Generated biodata of ${personal.name}</p>
        <p>Thank you for viewing ❤️</p>
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
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
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
          className="glass-effect rounded-xl"
        >
          <h3 className="text-2xl font-bold text-text mb-3 p-4 text-center">Contact Information</h3>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href={`mailto:${biodata.contact.email}`}
              className="flex flex-col items-center  transition-all group w-24 sm:w-32"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-8 h-8 text-primary mb-2 group-hover:animate-pulse" />
              <span className="text-sm text-gray-700 font-medium">Email</span>
            </motion.a>

            <motion.a
              href={`tel:${biodata.contact.phone}`}
              className="flex flex-col items-center  transition-all group w-24 sm:w-32"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-8 h-8 text-accent mb-2 group-hover:animate-pulse" />
              <span className="text-sm text-gray-700 font-medium">Call</span>
            </motion.a>
            <motion.a
              href={`https://wa.me/${biodata.contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center  transition-all group w-24 sm:w-32"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-8 h-8 text-green-600 mb-2 group-hover:animate-pulse" />
              <span className="text-sm text-gray-700 font-medium">WhatsApp</span>
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
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Note:</span> Please contact only if you are genuinely interested and looking for a serious relationship. Family involvement is welcome and appreciated.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;