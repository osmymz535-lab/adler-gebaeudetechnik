import React from 'react';
import { motion } from 'motion/react';

export default function Datenschutz() {
  return (
    <div className="pt-[140px] pb-24 min-h-screen bg-gray-50 text-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-16 shadow-lg border border-gray-100 rounded-sm prose max-w-none text-sm text-gray-600 leading-relaxed whitespace-pre-wrap space-y-8"
        >
          <h1 className="text-4xl font-extrabold tracking-tight mb-8 text-primary border-b border-gray-100 pb-4 whitespace-normal">
            Datenschutzerklärung
          </h1>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="mt-4 p-6 bg-gray-50 border-l-4 border-accent rounded-sm whitespace-normal text-sm text-gray-600 leading-relaxed">
              <strong>Adler² Gebäudetechnik</strong><br />
              Inhaber: Osman Yilmaz<br />
              H 3, 3<br />
              68159 Mannheim<br />
              Deutschland<br /><br />
              Telefon: 0176 72763366<br />
              E-Mail: info@adlergebaeudetechnik.de
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">2. Allgemeine Hinweise</h2>
            <p>Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können, zum Beispiel Name, Anschrift, Telefonnummer, E-Mail-Adresse oder IP-Adresse.</p>
            <p className="mt-3">Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Bearbeitung von Anfragen, zur Angebotserstellung, zur Durchführung von Verträgen oder aufgrund gesetzlicher Pflichten erforderlich ist.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">3. Hosting und Server-Logfiles</h2>
            <p>Beim Besuch dieser Website werden automatisch technische Daten durch den Webserver erfasst und in sogenannten Server-Logfiles gespeichert. Dazu können insbesondere gehören:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seite oder Datei</li>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>übertragene Datenmenge</li>
              <li>Meldung über erfolgreichen oder fehlerhaften Abruf</li>
            </ul>
            <p className="mt-3">Diese Daten werden verarbeitet, um die Website sicher, stabil und fehlerfrei bereitzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und störungsfreien Betrieb dieser Website.</p>
            <p className="mt-3">Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">4. Kontaktaufnahme per E-Mail, Telefon oder Kontaktformular</h2>
            <p>Wenn Sie uns per E-Mail, Telefon oder über ein Kontaktformular kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten zur Bearbeitung Ihrer Anfrage.</p>
            <p className="mt-3">Dies betrifft insbesondere:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Anschrift, sofern angegeben</li>
              <li>Inhalt Ihrer Nachricht</li>
              <li>Angaben zum gewünschten Leistungsbereich</li>
            </ul>
            <p className="mt-3">Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit einem Auftrag, einem Angebot oder vorvertraglichen Maßnahmen zusammenhängt. In allen übrigen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sachgerechten Bearbeitung Ihrer Anfrage.</p>
            <p className="mt-3">Ihre Daten werden nicht ohne Ihre Einwilligung weitergegeben, außer dies ist zur Bearbeitung Ihrer Anfrage, zur Angebotserstellung, zur Vertragserfüllung oder aufgrund gesetzlicher Pflichten erforderlich.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">5. Kontaktformular</h2>
            <p>Wenn Sie unser Kontaktformular nutzen, werden die eingegebenen Daten zur Bearbeitung Ihrer Anfrage verarbeitet.</p>
            <p className="mt-3 font-semibold text-primary">Hinweis beim Kontaktformular:</p>
            <p className="italic mt-1">„Mit dem Absenden des Formulars werden Ihre Angaben zur Bearbeitung Ihrer Anfrage verarbeitet. Weitere Informationen finden Sie in unserer Datenschutzerklärung.“</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">6. Cookies</h2>
            <p>Diese Website verwendet nur technisch notwendige Cookies, sofern nicht ausdrücklich etwas anderes angegeben ist. Technisch notwendige Cookies sind erforderlich, damit die Website ordnungsgemäß funktioniert.</p>
            <p className="mt-3">Soweit nicht notwendige Cookies, Analyse-Tools, Karten-Dienste, externe Medien oder vergleichbare Dienste verwendet werden, erfolgt dies nur mit Ihrer vorherigen Einwilligung.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">7. Externe Dienste und Inhalte</h2>
            <p>Sofern auf dieser Website externe Dienste wie Google Maps, Google Fonts, Analyse-Tools, Videos, Social-Media-Elemente oder ähnliche Inhalte eingebunden werden, können personenbezogene Daten, insbesondere Ihre IP-Adresse, an den jeweiligen Anbieter übermittelt werden.</p>
            <p className="mt-3">Solche Dienste werden nur eingesetzt, soweit dies technisch erforderlich ist oder Sie zuvor eingewilligt haben.</p>
            <p className="mt-3 text-xs italic">Falls Google Fonts verwendet werden, sollten diese nach Möglichkeit lokal auf dem eigenen Server eingebunden werden. Bei externer Einbindung können personenbezogene Daten an Google übermittelt werden.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">8. Speicherdauer</h2>
            <p>Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>
            <p className="mt-3">Daten aus Anfragen werden gelöscht, sobald die Bearbeitung abgeschlossen ist, sofern keine gesetzlichen Aufbewahrungspflichten oder berechtigten Interessen einer weiteren Speicherung entgegenstehen.</p>
            <p className="mt-3">Geschäftliche Unterlagen, Angebote, Rechnungen und Vertragsdaten werden entsprechend den gesetzlichen Aufbewahrungsfristen gespeichert.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">9. Weitergabe personenbezogener Daten</h2>
            <p>Eine Weitergabe personenbezogener Daten erfolgt nur, wenn dies zur Vertragsabwicklung erforderlich ist, eine gesetzliche Verpflichtung besteht, Sie eingewilligt haben oder ein berechtigtes Interesse besteht.</p>
            <p className="mt-3">Eine Weitergabe kann insbesondere erfolgen an:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>Hosting-Anbieter</li>
              <li>E-Mail-Dienstleister</li>
              <li>Steuerberater</li>
              <li>Behörden</li>
              <li>Zahlungsdienstleister</li>
              <li>beteiligte Fachpartner oder Nachunternehmer, soweit dies zur Bearbeitung Ihrer Anfrage oder zur Durchführung eines Auftrags erforderlich ist</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">10. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers mit „https://“ beginnt.</p>
            <p className="mt-3">Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können Daten, die Sie an uns übermitteln, nicht ohne Weiteres von Dritten mitgelesen werden.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">11. Datenschutzbeauftragter / Datenschutzkontakt</h2>
            <p>Ein Datenschutzbeauftragter ist derzeit nicht benannt, da hierfür nach aktuellem Stand keine gesetzliche Verpflichtung besteht.</p>
            <p className="mt-3">Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Betroffenenrechte können Sie sich jederzeit an uns wenden:</p>
            <p className="mt-1 font-semibold text-primary">info@adlergebaeudetechnik.de</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">12. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten. Außerdem haben Sie das Recht auf Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die Verarbeitung.</p>
            <p className="mt-3">Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>
            <p className="mt-3">Zur Ausübung Ihrer Rechte können Sie sich jederzeit an uns wenden:</p>
            <p className="mt-1 font-semibold text-primary">info@adlergebaeudetechnik.de</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">13. Widerspruchsrecht</h2>
            <p>Wenn die Verarbeitung Ihrer personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einzulegen.</p>
            <p className="mt-3">Wenn Sie Widerspruch einlegen, verarbeiten wir Ihre personenbezogenen Daten nicht mehr, es sei denn, es bestehen zwingende schutzwürdige Gründe für die Verarbeitung oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">14. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen Datenschutzrecht verstoßt.</p>
            <p className="mt-3">Zuständige Aufsichtsbehörde ist:</p>
            <p className="mt-2 font-semibold text-primary">Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</p>
            <p>
              Lautenschlagerstraße 20<br />
              70173 Stuttgart<br />
              Deutschland<br /><br />
              Website: <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.baden-wuerttemberg.datenschutz.de</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">15. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich rechtliche, technische oder organisatorische Änderungen ergeben.</p>
          </div>

          <div className="pt-8 border-t border-gray-100 text-xs text-gray-400">
            Stand: 31.05.2026
          </div>
        </motion.div>
      </div>
    </div>
  );
}
