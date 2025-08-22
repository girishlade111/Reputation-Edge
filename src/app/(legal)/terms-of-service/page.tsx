"use client";

import { useState, useEffect } from "react";

export default function TermsOfServicePage() {
    const [lastUpdated, setLastUpdated] = useState("");

    useEffect(() => {
        setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    }, []);

    return (
      <>
        <h1>Terms of Service for Reputation Edge</h1>
        <p><strong>Last Updated:</strong> {lastUpdated}</p>

        <h2>1. Agreement to Terms</h2>
        <p>
          By using our website, you agree to be bound by these Terms of Service. If you do not agree to these Terms, do not use the website. We may modify these Terms at any time, and such modification shall be effective immediately upon posting of the modified Terms.
        </p>

        <h2>2. Use of the Website</h2>
        <p>
          You agree to use the website for lawful purposes only. You are prohibited from posting on or transmitting through the website any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, profane, hateful, or otherwise objectionable, including, but not to, any material that encourages conduct that would constitute a criminal offense, give rise to civil liability, or otherwise violate any applicable local, state, national, or international law.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content included on the website, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the website, is the property of Reputation Edge or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.
        </p>

        <h2>4. Disclaimer of Warranties</h2>
        <p>
          The website and its content are provided on an "as is" and "as available" basis without any warranties of any kind. We do not warrant that the website will operate error-free or that the website and its server are free of computer viruses or other harmful mechanisms.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall Reputation Edge, its directors, employees, or agents, be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including, without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
        </p>
        
        <h2>Contact Us</h2>
        <p>
            If you have any questions about these Terms, please contact us at:
        </p>
        <p>
            Reputation Edge<br />
            123 PR Avenue, Suite 456<br />
            New York, NY 10001<br />
            Email: <a href="mailto:legal@reputationedge.com">legal@reputationedge.com</a>
        </p>
      </>
    );
  }