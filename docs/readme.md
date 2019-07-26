---
title: Der Hass im Netz
author: Pascal Albisser
date: 9. August 2019
---

*[Wiegand]: Dr. Michael Wiegand, Computerlinguist, forscht am Leibniz-Wissenschafts Campus «Empirical Linguistics and Computational Language Modeling», einem Kooperationsprojekt des Leibniz-Instituts für Deutsche Sprache (IDS) Mannheim und des Instituts für Computerlinguistik der Universität Heidelberg
*[Stahel]: Dr. Lea Stahel, Soziologisches Institut, Universität Zürich, forscht zu digitaler Soziologie und Online Aggression, Dissertation: «Microfoundations of aggressive commenting on social media within a sociological multilevel perspective»
*[Bretschneider]: Dr. Uwe Bretschneider, Data Scientist, promovierte zum Thema «Detektion von Directed Hate Speech, Online Harassment und Cyberbullying in Online Communities»

_Das Internet ist voll von Hass. Bei der Unmenge an Kommentaren und Beiträgen scheint es unmöglich, alle von Menschen überprüfen zu lassen, um Hass abzufangen. Deshalb setzen viele ihre Hoffnung in eine automatische Überprüfung durch eine künstliche Intelligenz. Doch können Maschinen für uns das Internet retten?_

Die Hoffnung kommt nicht von irgendwo. Künstliche Intelligenz hat in jüngster Zeit erstaunliche Fortschritte ermöglicht. Sprachassistenten, autonomes Fahren, Gesichtserkennung. Das sollte es doch auch möglich sein, Hass-Kommentare zu filtern. 
Diese Fortschritte wurde vor allem durch Machine Learning ermöglicht. Systeme, die von grossen Datenmengen lernen und Regeln ableiten können. Also habe ich einen grossen Datensatz von Hasskommentaren und hassfreien Beiträgen zusammengestellt, um einer Maschine beizubringen, zwischen diesen beiden Kategorien zu unterscheiden. 

Gespannt, wie gut das funktioniert? Unten kannst du einen Kommentar eingeben und überprüfen, ob die Maschine allfälligen Hass erkennt. Schaffst du es, die Maschine zu täuschen?

<ClientOnly>
  <HateForm/>
</ClientOnly>

Vielleicht hast du bereits bemerkt, dass diese Lösung nicht ganz akkurat ist. Wenn nicht, probiere mal «Raus mit dem Pack». So weit, so gut. Versuche nun einmal «Eine Packung Spaghetti». Irgendetwas läuft da schief. 

## technische Limitationen ##

«Das Problem hier sind oft die Datensätze», sagt der Computerlinguist Michael Wiegand. Die Systeme würden Artefakte aus den Daten erlernen, vor allem wenn die Datensätze unausgewogen sind. Die Maschine merkt sich Wörter, die oft in Zusammenhang mit Hate Speech stehen und schlägt Alarm, sobald sie solche Ausdrücke findet. Wiegand nennt als Beispiel einen Datensatz, mit dem Forscher sexistischen Hate Speech erkennen wollten. «Die sexistischen Äusserungen handelten häufig von Fussball und Frauen. Der Klassifikator sagte dann immer bei Schlüsselwörtern wie Fussball und Frauen, da gehts um Hasskommentare. Das ist völliger Quatsch».
## Problem mit Kontext ##
Die erwähnten Systeme sind gut darin Schlüsselwörter, etwa Kraftausdrücke, zu erkennen. Auch dann, wenn Wörter durch alternative Schreibweisen verschleiert werden, oder bei bestimmten Wortabfolgen. So kann ein Teil der Hassnachrichten erkannt werden. «Aber ich bezweifle sehr, dass eine Maschine die Äusserungen erkennt, weil sie den genauen Hintergrund verstanden hat, sondern weil gewisse Wörter besonders oft vorkommen», so Wiegand. 

Hater sind kreativ. Ihren Hass verpacken sie mitunter in Umschreibungen, Ironie und Sarkasmus oder bildhafte Sprache. Maschine tun sich schwer bei solchen Dingen. «So etwas bekommt ein Rechner nicht hin», sagt etwa Michael Wiegand. Der Data Scientist Uwe Bretschneider pflichtet ihm bei: «Ironie ist ein grosses technisches Problem». Aber gerade Ironie würde bei politischen Diskussionen oft verwendet. 

Oft fehlt aber auch einfach der Kontext, wenn nur ein einzelner Kommentar bewertet werden soll. Etwa wenn sich Internetnutzer über den Mord an einem Politiker erfreut zeigen. «Dann müsste die Maschine ja soziale Konventionen kennen, etwa dass man sich nicht über den Tod eines Menschen freut», merkt Michael Wiegand an. 

Maschinen haben grosse Mühe Kontext zu erfassen. Aber selbst für Menschen ist es im Internet unter Umständen schwierig, das Geschriebene einzuschätzen. «Die Kommunikation ist asynchron, teilweise anonym und man hat keine nonverbalen Signale», so Lea Stahel vom soziologischen Institut der Universität Zürich. «Man weiss halt nicht, wie das geschriebene Wort dann auch wirklich interpretiert werden soll». Zeichenbegrenzungen auf Internetplattformen würden diesen Effekt noch verstärken, da man so die eigene Meinung noch weniger begründen könne. 
## fehlende Ressourcen ##
Eine weitere Herausforderung für maschinelle Lösungen sind die fehlenden Daten, gerade in deutscher Sprache. Selbst um relativ einfach Systeme wie die oben beschriebenen zu trainieren, fehlen brauchbare Datensätze. Damit hatte auch Uwe Bretschneider zu kämpfen, der für sein Hate Speech Erkennungssystem mit dem Kantorowitsch-Forschungspreis ausgezeichnet wurde. «Datenbeschaffung war ein ganz schwieriges Thema. Es hat einen sehr grossen Zeitanteil von den ganzen Forschungsprojekten eingenommen». Auch Michael Wiegand bestätigt diesen Umstand. «Unsere Shared Task 2018 zu diesem Thema war eigentlich so das erste Bemühen in Deutschland überhaupt mal einen grösseren datensatz für diese Aufgabe zu erstellen». 

Zudem fehle es an Theorie aus der Linguistik, auf dessen Basis ein Algorithmus zur Erkennung von Hate Speech aufbauen könnte. Uwe Bretschneider hoffte für sein System bei den Sprachwissenschaften auf theoretische Modelle zu stossen. Beispielsweise, «was für grundsätzliche Möglichkeiten es gibt, in der deutschen Sprache stimmungsbehaftete Aussagen gegen Objekte zu richten». 
## Definitionsprobleme ##
«Die Verbreitung von Hass mit dem Ziel der Herabsetzung und Verunglimpfung bestimmter Personen oder Personengruppen». Soweit eine allgemeine Definition von Hate Speech.  Alle befragten Personen sind sich aber einig, dass Hate Speech in der Praxis durchaus schwer zu bestimmen sein kann. «Selbst beim manuellen Klassifizieren gibt es immer noch so viele Grenzfälle, bei denen auch ein Mensch sich sehr schwertut, zu entscheiden», so Uwe Bretschneider. Du kannst es gerne selbst einmal versuchen:

<ClientOnly>
  <Quiz/>
</ClientOnly>

Je nach Mensch und Zeitpunkt seien auch die Befindlichkeiten anders und einzelne Kommentare würde verschieden eingeschätzt, ergänzt Michael Wiegand. Beispielsweise nach einem Attentat reagierten die ModeratorInnen auf den Plattformen empfindlicher.
Und es stellt sich die Frage, wer im konkreten Fall überhaupt darüber entscheiden soll, was Hate Speech ist und was nicht. «Ist es die Person, welche einen Tweet oder einen Kommentar absetzt? Ist es die Person, welche den Kommentar liest, die angegriffen wurde oder auch nicht? Oder ist es der Wissenschaftler, der neutrale Kategorien anwenden kann? Das ist eine schwierige Frage». Damit ist auch in Frage gestellt, ob eine Maschine überhaupt berechtigt wäre, Kommentare zu bewerten und gegebenenfalls zu löschen, oder ob das viel mehr in der Macht der Nutzer liegen sollte. 
## Was ist mit Big Tech? ##
Es gibt also viele Herausforderungen im Bereich Hate Speech. Aber was ist mit den grossen Techfirmen, die auch regelmässig mit diesem Problem zu kämfpen haben? Facebook alleine zählt mittlerweile weltweit 1.56 Milliarden Nutzer (Stand April 2019), die täglich entsprechend viele Beiträge verfassen. Mit den immensen Mengen an Daten und dem riesigen technischen Know-How verfügen die Technologieriesen zumindest über gute Voraussetzungen.

Keine der Plattformen war für eine Stellungnahme zu erreichen. Michael Wiegand merkt jedoch an, dass die global agierenden Firmen vor einigen Herausforderungen stünden, schon nur im Hinblick auf die unterschiedlichen Gesetzeslagen: «Was in Grossbritannien oder im angelsächsischen Raum erlaubt ist, ist vielleicht in Deutschland schon strafbar». Also braucht es pro Land unterschiedliche Algorithmen, um diesen Anforderungen gerecht zu werden. Unterschiedliche Sprachen und kulturelle Hintergründen erschwerten die Sache weiter. Schimpfwörter aus einer Sprache, haben in einer anderen Sprache eine andere Bedeutung.      

Uwe Bretschneider glaubt zudem, die grossen sozialen Netzwerke seien sehr vorsichtig mit einem maschinellen Löschprozess. «Weil jede falsch klassifizierte Nachricht ist aus Sicht der sozialen Netzwerke sehr, sehr teuer. Die kommen halt immer hoch und werden bekannt». Nutzer, die sich in ihrere Meinungsfreiheit eingeschränkt sehen, machen viel Lärm. 
## Was tun wir also? ## 
Auf dem heutigen technischen Stand könnten Maschinen allenfalls eine Vorselektion vornehmen, die dann von Menschen überprüft werde, so Wiegand. «Diese automatischen Verfahren sollten nicht am Ende der Kette stehen. das halte ich für fatal». Bretschneider sieht aber trotzdem Einsatzmöglichkeiten. Nicht bei den grossen sozialen Netzwerken, aber bei dezidierten Plattformen, etwa Spiele-Foren für Jugendliche. Denn bei besonders schützenswerten Personengruppen müssen man schnell handeln, da der psychische Schaden in dem Moment entsteht, in dem die angegriffene Person die Nachricht liest. Da bringt es kaum etwas, die Nachrichten im nachhinein zu löschen. Aber auch er sieht maschinelle Lösungen im Allgemeinen eher als Vorselektion, die von Menschen überprüft wird.

Lea Stahel weist darauf hin, dass man Hate Speech aber kaum aus rein technischer Sicht betrachten könne: «Schlussendlich ist es immer auch ein politisches Problem. Hate Speech reflektiert auch eine politische Realität. Es kann also keine reine Internet-Lösung geben für das Problem Hate Speech». 

Die Frage nach einer maschinellen Lösung wirft also ganz viele Folgefragen auf, mit denen wir uns wohl noch eine Weile beschäftigen werden. Eines scheint aber klar zu sein: Rettung ist von den Maschinenwelt vorerst keine zu erwarten. Wir müssen selbst mit diesem Problem fertig werden.

### Artikel teilen:
<ClientOnly>
  <Social />
</ClientOnly>

::: info Über 

## Über

Dieser Artikel ist Teil meiner Bachelorarbeit im Studiengang «Media Engineering» an der HTW Chur. In der begleitenden wissenschaftlichen Arbeit habe ich mich mit der Frage beschäftigt, inwiefern Machine Learning in der journalistischen Recherche eine Rolle spielen kann. Für Fragen, Anregungen und Kritik bin ich unter der Adresse <pscl.lbssr@gmail.com> erreichbar.

- [Webseite](https://pscl.lbssr.ch)<br>
- [Github](https://github.com/pscllbssr)<br>
- [LinkedIn](https://www.linkedin.com/in/pascal-albisser)<br>

:::