---
title: Methodik Hate Speech Classifier
author: Pascal Albisser
date: 9. August 2019
---

_Für den Artikel «[Der Hass im Netz](readme.md)» entwickelte ich ein Machine Learning Modell, das Hate Speech in Textnachrichten erkennen kann. Nachfolgend eine Beschreibung, wie ich konkret vorgegangen bin, um das Modell zu entwickeln. Der ganze Programmiercode kann auf [Github](https://github.com/pscllbssr/hatespeech-ml) abgerufen werden._

## Datenbeschaffung und -aufbereitung

Damit das Modell lernen konnte, Hasskommentare zu erkennen, benötigte ich zuerst genügend Trainingsdaten. Also einen Haufen Hasskommentare und neutrale Gegenbeispiele. 

Zu diesem Zweck wollte ich ursprünglich Hasskommentare verwenden, bei denen es zu einer Verurteilung kam. Ein solcher Datensatz war aber schwer zu beschaffen und enthielt in der Summe zu wenige Beispiele, um Machine Learning damit zu betreiben. Ein anderer Ansatz war, Kommentarspalten aus Online-Medienangeboten oder gesammelte Hasskommentare von Anti-Diskriminierungsstellen zu verwenden. Diese waren aber meist zu wenig strukturiert oder schlicht nicht zugänglich. 

Schlussendlich griff ich auf drei Datensätze aus der Forschung zurück, die ich zu einem grossen Datensatz kombinierte. Die verwendeten Datensätze:

* Datensatz des Graduiertenkollegs «Nutzerzentrierte Soziale Medien» der Universität Duisburg-Essen: [Link](https://github.com/UCSM-DUE/IWG_hatespeech_public)
* Datensatz aus einer Arbeit von Uwe Bretschneider und Ralf Peters, Martin-Luther-Universität Halle-Wittenberg: [Link](http://www.ub-web.de/research/)
* Polly-Korpus von Tom De Smedt (Universität Antwerpen) und Sylvia Jaki (Universität Hildesheim): [Link](https://docs.google.com/spreadsheets/d/1c5peNMjt24U0FcEMSj8gD_JjzumqXTWbPWa_yb2nNt0/edit#gid=2031183870)

Diese Datensätze musste ich zuerst in die gleiche technische und inhaltliche Form bringen, da sie in verschiedenen Speicherformaten und unterschiedlichen Annotationsschemen vorlagen. [Im kombinierten Datensatz](https://github.com/pscllbssr/hatespeech-ml/blob/master/2_Feature_Engineering/export/combined_polly_bretschneider_iwg.xlsx) sind der Rohtext des Kommentars, die durchschnittliche Einschätzung aller Experten (Zahl zwischen 0 und 1), sowie davon abgeleitet eine binäre Einschätzung des Kommentars (Hasskommentar ja/nein) enthalten. Zudem habe ich Texte unter 50 Zeichen (schwer zu kontextualisieren) und Texte über 300 Zeichen (maximale Tweet Länge: 280 Zeichen) herausgefiltert, um es der Maschine einfacher zu machen. 

Der Code dafür findet sich in den einzelnen Notebooks:
* [Kombination der Datensätze](https://github.com/pscllbssr/hatespeech-ml/blob/master/2_Feature_Engineering/8%20combine%20IWG%2C%20Bretschneider%20and%20polly%20subset.ipynb)
* [Aufbereitung](https://github.com/pscllbssr/hatespeech-ml/blob/master/1_Data_Cleaning/Dataset_Facebook_Bretschneider_Peters_2016/Preparing%20from%20MySQL%20source.ipynb) und [Umrechnung](https://github.com/pscllbssr/hatespeech-ml/blob/master/2_Feature_Engineering/1%20Normalize%20Breitschneider%20Peters%20Facebook%20Hate%20Speech.ipynb) der Datensatzes von Bretschneider/Peters
* [Aufbereitung](https://github.com/pscllbssr/hatespeech-ml/blob/master/2_Feature_Engineering/2%20Normalize%20IWG%20twitter%20dataset%20on%20refugees.ipynb) des IWG-Datensatzes
* [Aufbereitung](https://github.com/pscllbssr/hatespeech-ml/blob/master/1_Data_Cleaning/Polly_corpus/cleanup.ipynb) der Beispiele aus dem Polly-Korpus

## Feature-Engineering

Ein zentraler Punkt beim Machine Learning ist das sogenannte «Feature-Engineering», also das Auswählen und Aufbereiten verschiedener Merkmale eines Datensatzes. Als erstes musste ich die Texte zur weiteren Verarbeitung durch die Maschine vorbereiten. 

In einem ersten Schritt anonymisiert das Programm Benutzernamen, falls das nicht bereits in den Quell-Datensätzen geschehen ist. Zudem werden Elemente entfernt, die nichts direkt mit dem untersuchten Text zu tun haben, beispielsweise Links oder plattformspezifische Ausdrücke wie RT (Hinweis auf einen Retweet bei Twitter). Diese Elemente würden ansonsten das Resultat verzerren. 

In einem weiteren Schritt entferne ich «Stopwords» aus dem Text. [Stopwords](https://en.wikipedia.org/wiki/Stop_words) sind Wörter, die in einer Sprache oft vorkommen, aber wenig zur Aussage eines Satzes beitragen, beispielsweise «der», «das», «ein», etc. Anschliessend benutzte ich einen [Lemmatizer](https://nlp.stanford.edu/IR-book/html/htmledition/stemming-and-lemmatization-1.html), um Wörter auf ihre Grundform zu reduzieren. Konjugierte Verben werden so als dasselbe Wort angesehen, also beispielsweise «bin», «bist» und «sind» werden in dieselbe Grundform «sein» umgewandelt. 

- [Code der Umwandlung](https://github.com/pscllbssr/hatespeech-ml/blob/master/0_common/model_helpers.py)

Der wichtigste Schritt in der maschinellen Sprachverarbeitung ist das Vektorisieren, also die Umwandlung von Buchstaben in Zahlen. Dies ist nötig, weil Computer nicht mit Worten oder Buchstaben rechnen, sondern mit Zahlen. Dafür gibt es verschiedene Methoden. Während der Entwicklung meines Machine Learning Modells habe ich verschiedene Verfahren ausprobiert. Schlussendlich habe ich mit einem simplen [CountVectorizer](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html) auf der Basis von Wortteilen die besten Resultate erzielt. Diese Erfahrung findet sich auch in der Wissenschaft wieder, beispielsweise bei Schmidt und Wiegand (2017, [Link](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html)). Wortteile, anstelle von ganzen Wörtern, bringen eine gewisse Toleranz gegenüber Rechtschreibefehlern mit sich. Das ist durchaus ein Vorteil, da Hater scheinbar Mühe haben mit korrektem Sprachgebrauch.

Zudem suchte ich nach zusätzlichen Merkmalen, die eine bessere Unterscheidung in die beiden Klassen ermöglicht hätten. Im Ordner [Feature-Engineering](https://github.com/pscllbssr/hatespeech-ml/tree/master/2_Feature_Engineering) sind die verschiedenen Versuche abgelegt. Keines der zusätzlichen Merkmale (Textlänge, Anzahl Satzzeichen, Sentiment-Analyse, Anteil Fluchwörter im Text) liess jedoch einen erheblichen Unterschied zwischen neutralen und hasserfüllten Kommentaren erkennen. 

## Auswahl der Algorithmen und Modell-Training

Schlussendlich galt es einen geeigneten Machine Learning Algorithmus auszuwählen. Dazu verglich ich die gängigsten Algorithmen anhand des [F1-Scores](https://www.mikulskibartosz.name/f1-score-explained/), einer gängigen Metrik im Machine Learning Bereich ([Jupyter-Notebook](https://github.com/pscllbssr/hatespeech-ml/blob/master/3_Model_Development/5_Version/6%20Evaluation%20of%20Algorithms%20with%20large%20dataset.ipynb)). Dabei schnitt die [logistische Regression](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html) am besten ab, dicht gefolgt von [Decision Trees](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html) und dem [Random Forest Classifier](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html). 

Anschliessend verglich ich die logistische Regression und den Random Forest weiter mit verschiedenen Einstellungen ([«Hyperparameter»](https://www.twt.de/news/detail/hyperparameter-tuning-der-feinschliff-eines-machine-learning-modells.html)). Den Decision Tree Classifier liess ich aus, weil er gegenüber Random Forest nicht so anfällig ist für «Overfitting» ([Erläuterung](https://towardsdatascience.com/why-random-forests-outperform-decision-trees-1b0f175a0b5)). Overfitting bedeutet, dass ein Algorithmus zu gut auf einen Datensatz trainiert ist, sich beispielsweise unbedeutende Artefakte merkt, jedoch kaum auf generelle Beispiele angewendet werden kann. 

Die besten Resultate lieferte schliesslich der Random Forest Algorithmus, mit einem **F1-Score von 91.9%** und einem **Recall-Wert von 92.9%**.


- [Jupyter-Notebook](https://github.com/pscllbssr/hatespeech-ml/blob/master/3_Model_Development/7_Version%20Deployment/4%20RF%20with%20char-vec.ipynb) des finalen Modells

## Deployment

Um das Modell im Internet nutzen zu können, musste ich das trainierte Modell exportieren und in eine Schnittstelle verpacken. Für die Schnittstelle griff ich auf das [Flask-Framework](https://github.com/pallets/flask) zurück, das in der gleichen Programmiersprache geschrieben ist wie der Machine Learning Code (Python). So konnte ich das Modell ohne weitere Umschweife einbinden und eine Abfrage programmieren, die einen Text als Eingabe entgegen nimmt und die Einschätzung des Modells als Resultat ausgibt. Der Code für die Schnittstelle ist auch auf [Github](https://github.com/pscllbssr/hatespeech-api) verfügbar. 

## Weitervewerwendung

Sämtlicher Code ist frei verfügbar und darf gerne weiterverwendet werden. Für eine allfällige Weiterentiwcklung des Modells oder eine Integration der Schnittstelle bin ich unter <pscl.lbssr@gmail.com> erreichbar. Ein Beispiel für die Einbindung der Schnittstelle mit Javascript findet sich im [Code](https://github.com/pscllbssr/hatespeech-frontend/blob/master/docs/.vuepress/components/HateForm.vue) dieser Webseite.

::: center Center

[&larr; Zurück zum Artikel](readme.md)

:::

::: info Über 

## Info

Dieser Artikel ist Teil meiner Bachelorarbeit im Studiengang «Media Engineering» an der HTW Chur. In der begleitenden wissenschaftlichen Arbeit habe ich mich mit der Frage beschäftigt, inwiefern Machine Learning in der journalistischen Recherche eine Rolle spielen kann. Für Fragen, Anregungen und Kritik bin ich unter der Adresse <pscl.lbssr@gmail.com> erreichbar.

- [Webseite](https://pscl.lbssr.ch)<br>
- [Github](https://github.com/pscllbssr)<br>
- [LinkedIn](https://www.linkedin.com/in/pascal-albisser)<br>

:::