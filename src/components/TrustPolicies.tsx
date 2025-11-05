import React from 'react';
import { Shield, FileText, Users, Lock, Globe, Download, Mail, CheckCircle, Eye, AlertTriangle, Scale } from 'lucide-react';

const TrustPolicies: React.FC = () => {
  const dataProtectionFeatures = [
    "Data is stored securely and encrypted",
    "Access is strictly limited to authorised staff under NDA", 
    "We only collect the minimum data necessary for management services",
    "You can make a Data Subject Access Request (DSAR) at any time"
  ];

  const consentFeatures = [
    "You always own your OnlyFans account and content",
    "We only receive a limited licence to publish agreed material on OnlyFans",
    "Consent is required for all uploads and campaigns", 
    "All staff are bound by a confidentiality agreement (NDA)"
  ];

  const contractHighlights = [
    "No lock-in contracts: leave at any time with short notice",
    "Transparent reporting: full access to your earnings and campaign data",
    "NDA protected: your information is never shared outside the agency",
    "Creator-first: we scale your earnings while protecting your rights"
  ];

  const antiLeakFeatures = [
    "All content is watermarked before publication",
    "We support you with DMCA takedowns for leaked content",
    "We never share or distribute your content outside OnlyFans"
  ];

  const internationalFeatures = [
    "Our agreements are governed by UK law (England & Wales)",
    "Onboarding is adjusted for local ID and 18+ verification rules", 
    "Creators are responsible for their own local tax reporting (HMRC in the UK; equivalent bodies abroad)",
    "We comply with platform rules (OnlyFans TOS) and UK regulatory bodies (Ofcom, ICO)"
  ];

  const legalDocuments = [
    { title: 'Privacy Policy', description: 'UK GDPR compliance, data handling, and your rights', icon: Shield },
    { title: 'Terms of Service', description: 'Agency-Creator agreement terms and conditions', icon: FileText },
    { title: 'Cookie Policy', description: 'How we use cookies and tracking technologies', icon: Eye },
    { title: 'Content & Safety Policy', description: '18+ verification, content guidelines, and safety protocols', icon: AlertTriangle },
    { title: 'DSAR Form', description: 'Data Subject Access Request form', icon: Download },
    { title: 'Model Release & NDA Summaries', description: 'IP ownership, consent, and confidentiality agreements', icon: Scale }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-12 lg:pb-16 relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm mb-2 sm:mb-3 lg:mb-4">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-1 sm:mr-2" />
              <span className="font-medium text-blue-700" style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }}>Legal & Compliance</span>
            </div>
            
            <h1 className="font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(24px, 6.5vw, 48px)' }}>
              Trust &
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Policies
              </span>
            </h1>
            
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: 'clamp(12px, 3.5vw, 18px)' }}>
              Transparent policies, UK GDPR compliance, and creator-first protections. 
              Your data, content, and rights are our priority.
            </p>
            
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4 sm:mt-6"></div>
          </div>
        </div>
      </section>

      {/* Data Protection Section */}
      <section className="py-8 sm:py-12 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 mb-6 sm:mb-8 lg:mb-12">
            <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(18px, 4.5vw, 28px)' }}>
                  Data Protection (UK GDPR)
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>
                  We are a UK-based agency registered with the Information Commissioner's Office (ICO). 
                  All personal data is handled in line with the UK GDPR and the Data Protection Act 2018.
                </p>
                
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  {dataProtectionFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consent & IP Ownership Section */}
      <section className="py-8 sm:py-12 lg:py-20 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
            <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(18px, 4.5vw, 28px)' }}>
                  Consent & IP Ownership
                </h2>
                
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  {consentFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Highlights Section */}
      <section className="py-8 sm:py-12 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
            <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(18px, 4.5vw, 28px)' }}>
                  Contract Highlights
                </h2>
                
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  {contractHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Leak & DMCA Section */}
      <section className="py-8 sm:py-12 lg:py-20 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
            <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(18px, 4.5vw, 28px)' }}>
                  Anti-Leak & DMCA
                </h2>
                
                <div className="space-y-3 sm:space-y-4">
                  {antiLeakFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Creators Section */}
      <section className="py-8 sm:py-12 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200">
            <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(18px, 4.5vw, 28px)' }}>
                  International Creators
                </h2>
                
                <div className="space-y-3 sm:space-y-4">
                  {internationalFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700" style={{ fontSize: 'clamp(11px, 2.8vw, 14px)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Documents Section */}
      <section className="py-8 sm:py-12 lg:py-20 relative bg-gray-900">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-12 lg:mb-16">
            <h2 className="font-bold text-white mb-3 sm:mb-4 lg:mb-6" style={{ fontSize: 'clamp(20px, 5.5vw, 36px)' }}>
              Legal
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Documents
              </span>
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>
              Access our complete legal documentation, policies, and request forms
            </p>
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mt-4 sm:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {legalDocuments.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-6 lg:p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 cursor-pointer hover:transform hover:scale-105"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-white mb-2 sm:mb-3 lg:mb-4 group-hover:text-blue-100 transition-colors duration-300" style={{ fontSize: 'clamp(14px, 3.5vw, 18px)' }}>
                      {doc.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300" style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>
                      {doc.description}
                    </p>

                    {/* Action indicator */}
                    <div className="mt-3 sm:mt-4 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      <span style={{ fontSize: 'clamp(10px, 2.5vw, 12px)' }} className="font-medium">View Document</span>
                      <Download className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </div>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 className="font-bold text-white mb-3 sm:mb-4" style={{ fontSize: 'clamp(16px, 4vw, 24px)' }}>Need Legal Support?</h3>
              <p className="text-gray-300 mb-4 sm:mb-6" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>
                Have questions about our policies or need to make a data request? Our legal team is here to help.
              </p>
              <a 
                href="mailto:hello@nvsn.com"
                className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 min-h-[44px]" 
                style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Legal Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustPolicies;