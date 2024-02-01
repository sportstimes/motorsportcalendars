import Image from "next/image";

export default function Privacy() {
  return (
	<div className="container mx-auto px-4 py-8">
	
		<div className="w-full"><h2 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h2><h3 className="text-2xl font-extrabold tracking-tight mt-10">Information we collect</h3>
		<p className="mb-5">We collect anonymous analytics data along with crash reports to provide, understand, and improve Motorsport Calendars.</p>
		<p className="mb-5">Information cannot be linked to a particular user unless that user manually provides us with their anonymized, randomly-generated identifier.</p>
		
		<h3 className="text-2xl font-extrabold tracking-tight mt-10">Information Usage</h3>
		<p className="mb-5">We use the information we collect to operate and improve Motorsport Calendars.</p><p className="mb-5">We do not share personal information with outside parties aside from those needed to accomplish Motorsport Calendars&apos;s functionality.</p>
		
		<h3 className="text-2xl font-extrabold tracking-tight mt-10">Security</h3>
		<p>All communication from the app to backend services is done using HTTPS.</p>
		
		<h3 className="text-2xl font-extrabold tracking-tight mt-10">Your Consent</h3>
		<p>By using and signing up to the Motorsport Calendars app, you consent to our privacy policy.</p>
		
		<h3 className="text-2xl font-extrabold tracking-tight mt-10">Children&apos;s Privacy</h3>
		<p>We never collect or maintain information at our website from those we actually know are under 13, and no part of our app is structured to attract anyone under 13.</p>
		
		<h3 className="text-2xl font-extrabold tracking-tight mt-10">California Privacy Rights</h3>
		<p>We comply with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent.</p>
		
		<h3 className="text-2xl font-extrabold tracking-tight mt-10">Changes to our Privacy Policy</h3>
		<p>If we decide to change our privacy policy, we will include those changes on this page.</p>
		
		<h3 className="text-2xl font-extrabold tracking-tight mt-10">Contact Us</h3>
		<p className="mb-10">If you have any questions regarding this privacy policy, you can email contact@andydev.co.uk.</p>
		<p>Last updated: 31/01/2024.</p></div>
	</div>
  );
}
