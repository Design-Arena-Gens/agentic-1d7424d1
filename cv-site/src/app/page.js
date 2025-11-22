import PrintButton from "@/components/PrintButton";

export default function Page() {
  return (
    <main className="page">
      <div className="header-block">
        <div className="identity">
          <h1>Présentation pour l&apos;entretien</h1>
          <p className="muted">
            Technicien en maintenance et amélioration de ponts
          </p>
        </div>
        <div className="print-button">
          <PrintButton />
        </div>
      </div>

      <section>
        <h2>Me présenter</h2>
        <p>
          Bonjour, je suis un technicien spécialisé dans la maintenance des
          ponts et des ouvrages d&apos;art. Depuis plusieurs années je prépare
          les inspections, j&apos;organise les équipes sur le terrain et je
          reste proche des clients pour garder un dialogue simple et franc. Je
          travaille avec méthode, je respecte les délais et je continue à
          apprendre les normes françaises pour rester efficace avec votre
          entreprise.
        </p>
      </section>

      <section>
        <h2>Plans réalisés et résultats</h2>
        <p>
          Voici trois plans complets que j&apos;ai déjà conduits afin de montrer
          ma capacité à sécuriser et améliorer un pont depuis l&apos;inspection
          jusqu&apos;à la livraison.
        </p>

        <div className="two-column">
          <article className="plan-card">
            <h3>Plan d&apos;inspection préventive</h3>
            <p>
              Mise en place d&apos;un calendrier trimestriel avec fiches simples
              pour chaque élément du pont (tablier, câbles, joints). Cela a
              réduit les urgences de 35 % et donné une vision claire au
              maître d&apos;ouvrage.
            </p>
          </article>

          <article className="plan-card">
            <h3>Plan de réparation structurelle</h3>
            <p>
              Coordination des essais, choix des matériaux compatibles et suivi
              quotidien des équipes. Résultat: moins de 2 % de reprise
              après réception, avec une circulation ouverte selon le planning.
            </p>
          </article>

          <article className="plan-card">
            <h3>Plan d&apos;amélioration de sécurité</h3>
            <p>
              Installation de garde-corps provisoires, signalisation claire et
              brief sécurité simple avant chaque poste. Aucun incident pendant
              six mois de chantier, même avec trafic ouvert.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2>Points forts pour votre mission</h2>
        <ul>
          <li>
            <span className="badge">Organisation</span>Tableaux de bord clairs
            pour suivre avancée, budget et alertes.
          </li>
          <li>
            <span className="badge">Technique</span>Lecture des plans, contrôle
            des coffrages, injection des fissures et choix des mortiers
            structurels.
          </li>
          <li>
            <span className="badge">Relation</span>Communication simple avec les
            équipes locales, rapports photos précis pour le client.
          </li>
        </ul>
      </section>

      <section>
        <h2>Ce que je propose</h2>
        <p>
          Je peux reprendre rapidement vos procédures, préparer un plan
          d&apos;attaque pour chaque pont et assurer un suivi quotidien avec des
          comptes rendus courts en français facile. Mon objectif est de livrer
          un ouvrage sûr, propre et conforme à vos attentes.
        </p>
      </section>

      <div className="footnote">
        Document prêt à imprimer — mis à jour automatiquement en {new Date().getFullYear()}
      </div>
    </main>
  );
}
