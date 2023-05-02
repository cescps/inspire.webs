var links = [
"https://liquiddeath.com/",
"https://habitsgarden.com/",
"https://visualizehabit.com/",
"https://slickinbox.com/",
"https://buildinpublic.com/",
"https://writesonic.com/",
"https://www.beepaudio.com/",
"https://www.llamalife.co/",
"https://layers.to/layers/discover",
"https://make.to",
"https://www.bento.me/",
"https://www.designjoy.co/",
"https://www.concise.app/",
"https://www.feyapp.com/",
"https://public.com/",
"https://www.neatprompts.com/",
"https://www.productizeyourself.co/",
"https://artifact.news/",
"https://windstatic.com/",
"https://brainsounds.app/",
"https://atck.fr/",
"http://cylndr.co.kr/",
"https://www.cartier.com/fr-fr/watchesandwonders",
"https://www.creathive.studio/",
"https://edifis.ca/en/",
"https://www.darc-room.com/",
"https://manonjouet.com/",
"https://www.koraliving.com/",
"https://missjourney.ai/",
"https://surya-aditya.com/",
"https://okcclabs.com/",
"https://sturdy.co/",
"https://type1ventures.com/",
"https://www.espn.com/espn/feature/story/_/id/34769042/ovechkin-800",
"https://silencio.es/",
"https://offficestud.io/",
"https://www.diko.co/",
"https://aanstekelijk.nl/",
"https://lightshiprv.com/",
"https://upperquad.com/",
"https://2authenticators.co/",
"https://aino.agency/",
"https://www.torebentsen.com/",
"https://hello.cuberto.com/",
"http://www.wethinkelastic.com/",
"https://rcarecords.com/",
"https://zero.tech/",
"https://www.curious.co/",
"https://locomotive.ca/",
"https://www.jonway.studio/",
"https://qu.ai/",
"https://www.fates.world/",
"https://wise.design/",
"https://e-t.studio/",
"https://www.fielddaysound.tv/",
"https://drivecapital.com/",
"https://www.natroceutics.com/",
"https://contrabureau.com/",
"https://www.cubansedge.com/",
"https://thesingularity.squarespace.com/",
"https://our-revolution.com/",
"https://www.spaceforce.com/",
"http://www.yonder.app/",
"https://denderty.ava-case.com/",
"https://en.manayerbamate.com/",
"https://lemma.studio/",
"https://www.traffic.productions/",
"https://atria.non-linear.studio/",
"https://eco.com/",
"https://www.axarb.com/",
"https://www.theperfumeshop.com/carolina-herrera-virtual-store",
"https://www.cmcc.vc/",
"https://maelanlemeur.com/",
"http://www.dhnn.com/",
"https://chainzoku.io/",
"https://rejouice.com/",
"http://letter-run.webflow.io/",
"https://www.sorenrose.com/",
"https://ohm.studio/",
"https://crosswire.unseen.co/",
"https://www.aaronmcguire.design/",
"https://ventriloc.ca/",
"https://stelostories.co/",
"https://www.resonant-link.com/",
"https://unseen.co/",
"https://bonne-sobriyearte.havasfactory.com/",
"https://water.falmec.com/",
"https://nationalstudentshow.com/",
"https://www.aircompany.com/",
"https://lenis.studiofreight.com/",
"http://www.kommigraphics.com/",
"https://www.lightfactorynow.com/",
"https://secrid.com/",
"https://ash.com/",
"https://www.giuligartner.com/",
"https://www.sprite.com/zerolimits",

"https://kprverse.com/",

"http://jams.basicagency.com/",

"https://adobexbowie75.com/",

"https://astrologyclub.byspotify.com/",

"http://www.getty.edu/persepolis",

"https://unleashingbest.com/",

"https://www.exoape.com/",

"https://www.witchernetflix.com/",

"https://www.magische-spiegelungen.de/",

"https://unconventionalgallery.ruinart.com/",

"http://museum.xbox.com/",

"https://niccolomiranda.com/",

"https://theshift.tokyo/en/",

"https://grids.obys.agency/",

"https://watch.webbyawards.com/",

"https://www.ibm.com/resources/activations/harmonic-state",

"https://www.aristidebenoist.com/",

"https://superlist.craftedbygc.com/",

"http://www.airforce.com/intothestorm",

"https://umamiland.withgoogle.com/en",

"https://www.no-fishing.net/",

"https://www.2-c.earth/",

"https://cornrevolution.resn.global/",

"https://delassus.com/",

"https://www.alanmenken.com/",

"https://www.madeleinedalla.com/",

"https://www.powerhouse-company.com/",

"https://theyearofgreta.com/",

"https://canals-amsterdam.com/",

"https://editorialnew.com/",

"https://matruecannabis.com/",

"https://www.onceuponatimemag.com/",

"https://frontierwithin.thorne.com/",

"https://locomotive.ca/",

"https://lusion.co/",

"https://2018.craftedbygc.com/",

"http://www.dogstudio.co/",

"https://everest.agency/",

"https://designcanada.com/",

"https://www.imabandi.to/",

"http://robinmastromarino.com/",

"http://oatthegoat.co.nz/intl.html",

"https://www.couroazul.com/",

"http://www.onedayinmyworld.com/",

"https://my.pottermore.com/hogwarts",

"https://webvrgame.dunkirkmovie.com/",

"http://www.espn.com/espn/feature/story/_/id/19045647/we-fans-documentary-official-site-espn",

];

var previousLink = "";
var linksCopy = links.slice(0); // make a copy of the links array

function getRandomLink() {
  var randomNumber = Math.floor(Math.random() * (linksCopy.length - 1));
  if (previousLink !== "") {
    for (var i = 0; i < linksCopy.length; i++) {
      if (linksCopy[i] === previousLink) {
        linksCopy.splice(i, 1);
        break;
      }
    }
  }
  var selectedLink = linksCopy[randomNumber];
  previousLink = selectedLink;
  return selectedLink;
}
