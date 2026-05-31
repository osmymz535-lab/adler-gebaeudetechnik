import React from 'react';
import { motion } from 'motion/react';

export default function Impressum() {
  return (
    <div className="pt-[140px] pb-24 min-h-screen bg-gray-50 text-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-16 shadow-lg border border-gray-100 rounded-sm prose max-w-none"
        >
          <h1 className="text-4xl font-extrabold tracking-tight mb-8 text-primary border-b border-gray-100 pb-4">
            Impressum
          </h1>

          <p className="text-sm text-gray-500 mb-8 font-medium">
            Angaben gemäß § 5 DDG
          </p>

          <div className="mb-8 p-6 bg-gray-50 border-l-4 border-accent rounded-sm">
            <strong className="block text-lg text-primary mb-2">Adler² Gebäudetechnik</strong>
            <p className="text-sm text-gray-600 leading-relaxed">
              Inhaber: Osman Yilmaz<br />
              H 3, 3<br />
              68159 Mannheim<br />
              Deutschland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 border border-gray-100 rounded-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Telefon</span>
              <span className="text-sm font-bold text-primary">0176 72763366</span>
            </div>
            <div className="p-6 border border-gray-100 rounded-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">E-Mail</span>
              <span className="text-sm font-bold text-primary">info@adlergebaeudetechnik.de</span>
            </div>
          </div>

          <div className="space-y-8 text-sm text-gray-600 whitespace-pre-wrap leading-relaxed">
            <p className="font-medium text-primary">Rechtsform: Einzelunternehmen</p>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Zuständige Kammer</h2>
              <p>
                Handwerkskammer Mannheim Rhein-Neckar-Odenwald<br />
                B1, 1–2<br />
                68159 Mannheim<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Berufsbezeichnung</h2>
              <p>
                Installateur- und Heizungsbauermeister<br />
                Bachelor Professional
              </p>
              <p className="mt-2 text-xs italic">
                Die Berufsbezeichnung wurde in der Bundesrepublik Deutschland verliehen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Berufsrechtliche Regelungen</h2>
              <p>
                Es gelten die berufsrechtlichen Regelungen der Handwerksordnung (HwO).<br />
                Diese sind abrufbar unter: <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.gesetze-im-internet.de</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Umsatzsteuer</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: derzeit nicht erteilt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Inhaltlich verantwortlich nach § 18 Abs. 2 MStV</h2>
              <p>
                Osman Yilmaz<br />
                Adler² Gebäudetechnik<br />
                H 3, 3<br />
                68159 Mannheim<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Verbraucherstreitbeilegung</h2>
              <p>
                Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Haftung für Inhalte</h2>
              <p>
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.
              </p>
              <p className="mt-3">
                Die auf dieser Website dargestellten Informationen, Leistungen, Bilder, technischen Angaben und Hinweise dienen ausschließlich der allgemeinen Information und stellen kein verbindliches Angebot dar. Verbindlich sind ausschließlich individuelle Angebote, Auftragsbestätigungen oder gesonderte schriftliche Vereinbarungen.
              </p>
              <p className="mt-3">
                Technische Angaben, Produktinformationen, Leistungsbeschreibungen, Beispielbilder und Referenzen ersetzen keine persönliche Beratung, Prüfung, Planung oder Begutachtung vor Ort. Maßgeblich sind stets die konkreten Gegebenheiten beim Kunden, die anerkannten Regeln der Technik, gesetzliche Vorgaben, behördliche Anforderungen, Herstellervorgaben sowie die jeweils vertraglich vereinbarte Leistung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Haftung für Links</h2>
              <p>
                Diese Website kann Links zu externen Websites Dritter enthalten. Auf die Inhalte dieser externen Seiten haben wir keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
              </p>
              <p className="mt-3">
                Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar. Eine dauerhafte Kontrolle externer Links ist ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links unverzüglich entfernt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Urheberrecht</h2>
              <p>
                Die auf dieser Website veröffentlichten Inhalte, Texte, Bilder, Grafiken, Logos und sonstigen Werke unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung außerhalb der gesetzlichen Grenzen des Urheberrechts ist nur mit vorheriger schriftlicher Zustimmung des jeweiligen Rechteinhabers zulässig.
              </p>
              <p className="mt-3">
                Soweit Inhalte auf dieser Website nicht vom Betreiber erstellt wurden, werden die Rechte Dritter beachtet. Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Inhalte unverzüglich entfernt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Marken- und Herstellerhinweise</h2>
              <p>
                Genannte Hersteller, Marken, Produktnamen oder Logos dienen ausschließlich der Beschreibung von Produkten, Leistungen oder technischen Zusammenhängen. Die jeweiligen Marken- und Kennzeichenrechte liegen bei den jeweiligen Rechteinhabern.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Hinweis bei Rechtsverletzungen</h2>
              <p>
                Sollten Sie der Ansicht sein, dass Inhalte dieser Website gegen geltendes Recht verstoßen oder Rechte Dritter verletzen, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir die betreffenden Inhalte unverzüglich prüfen und gegebenenfalls entfernen.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-100 text-xs text-gray-400">
              Stand: 31.05.2026
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
