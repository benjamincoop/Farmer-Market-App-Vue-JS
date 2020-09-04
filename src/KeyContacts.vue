

<template >
    <div >
			<h1 class="keyContactsTitle">Key Contacts</h1>
			<table align="center">
			
						<thead >
							<tr >
								<th >Questions on?</th>
								<th>Phone</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="e in info">
								<th v-if="e.Email !== '' && e.Website !== ''">
									<div class="tableTextPaddingDescription">{{e.Description}}</div>
									<div class ="tableTextPadding"> <b>Who To Contact:</b>	{{e.WhoToContact}}</div>
									<div class ="tableTextPadding"><b>Website:</b>	{{e.Website}}</div>
									<div class ="tableTextPadding"><b>Email:</b>	{{e.Email}}</div>
								</th>
								<th v-else-if="e.Email === '' && e.Website === ''">
									<div class="tableTextPaddingDescription">{{e.Description}}</div>
									<div class ="tableTextPadding"> <b>Who To Contact:</b>	{{e.WhoToContact}}</div>
									
								</th>
								<th v-else-if="e.Email === ''">
									<div class="tableTextPaddingDescription">{{e.Description}}</div>
									<div class ="tableTextPadding"> <b>Who To Contact:</b>	{{e.WhoToContact}}</div>
									<div class ="tableTextPadding"><b>Website:</b>	{{e.Website}}</div>
									
								</th>
								<th v-else-if="e.Website === ''">
									<div class="tableTextPaddingDescription">{{e.Description}}</div>
									<div class ="tableTextPadding"> <b>Who To Contact:</b>	{{e.WhoToContact}}</div>
									<div class ="tableTextPadding"><b>Email:</b>	{{e.Email}}</div>
									
								</th>
								
								<th>{{e.PhoneNumber}}</th>
							</tr>
						</tbody>
							
			</table>
    </div>
</template>

<script>

    export default {
		


        data(){ return {
			info:{
			q1: {
			Description: "Food Safety licensing and inspection",
			WhoToContact: "KDA Food Safety and Lodging program",
			Website: "agriculture.ks.gov/foodsafety",
			Email: "kda.fsl@ks.gov",
			PhoneNumber: "785-564-6767",
			},
			q2: {
			Description: "Value added product recipe approval, product development, Better Process Control School, HACCP, etc.",
			WhoToContact: "Kansas State University Value-Added/ Product Development Lab",
			Website: "www.ksre.ksu.edu/kvaf",
			Email: "kvafl@ksu.edu",
			PhoneNumber: "785-532-1668",
			},
			q3: {
			Description: "Sales tax information",
			WhoToContact: "Kansas Department of Revenue",
			Website: "www.ksrevenue.org/",
			Email: "tac@kdor.ks.gov",
			PhoneNumber: "785-368-8222",
			},
			q4: {
			Description: "Filing as a business entity",
			WhoToContact: "Kansas Secretary of State",
			Website: "www.kssos.org/main.html",
			Email: "",
			PhoneNumber: "785-296-4564",
			},
			q5: {
			Description: "General information on Kansas farmers markets, registering a farmers market",
			WhoToContact: "From the Land of Kansas program",
			Website: "https://www.fromthelandofkansas.com/page/farmers-market-resources",
			Email: "farmersmarkets@ kda.ks.gov",
			PhoneNumber: "785-564-6755",
			},
			q6: {
			Description: "Accepting Senior Farmers Market Nutrition Program (SFMNP) coupons",
			WhoToContact: "Kansas Department of Health and Environment",
			Website: "www.kdheks.gov/sfmnp/",
			Email: "",
			PhoneNumber: "",
			},
			q7: {
			Description: "Accepting SNAP (Benefits Cards) from customers",
			WhoToContact: "USDA Supplemental Nutrition Assistance Program (SNAP)",
			Website: "https://www.fns.usda.gov/snap/apply-to-accept",
			Email: "",
			PhoneNumber: "",
			},
			q8: {
			Description: "Scale testing, method of selling produce",
			WhoToContact: "KDA Weights and Measures",
			Website: "agriculture.ks.gov/divisions-programs/weight-measures",
			Email: "",
			PhoneNumber: "785-564-6700",
			},
			q9: {
			Description: "Selling live plants",
			WhoToContact: "KDA Plant Protection and Weed Control Program",
			Website: "agriculture.ks.gov/divisions-programs/plant-protect-weed-control/live-plantdealer",
			Email: "",
			PhoneNumber: "785-564-6700",
			},
			q10: {
			Description: "Meat and poultry inspection and registering of label claims",
			WhoToContact: "KDA Meat and Poultry program",
			Website: "agriculture.ks.gov/divisions-programs/meat-and-poultry-inspection/general-information",
			Email: "",
			PhoneNumber: "785-564-6776",
			},
			q11: {
			Description: "Questions on dairy processing, licensing, and product labeling",
			WhoToContact: "KDA Dairy Inspection program",
			Website: "agriculture.ks.gov/divisions-programs/dairy-inspection/dairy-consumers",
			Email: "amanda.anderson @ks.gov",
			PhoneNumber: "785-564-6700",
			},
			q12: {
			Description: "Business consulting for small businesses",
			WhoToContact: "Kansas Small Business Development Center",
			Website: "www.kansassbdc.net/",
			Email: "",
			PhoneNumber: "1-877-625-7232",
			},
			q13: {
			Description: "Information and personal assistance to start or maintain a Kansas business",
			WhoToContact: "Kansas Business Center",
			Website: "www.kansas.gov/businesscenter/",
			Email: "",
			PhoneNumber: "877-521-8600",
			},
			q14: {
			Description: "Small business development assistance",
			WhoToContact: "Kansas Department of Commerce",
			Website: "www.kansascommerce.com/",
			Email: "",
			PhoneNumber: "785-296-3481",
			},
			q15: {
			Description: "Small business development assistance",
			WhoToContact: "Kansas Department of Commerce",
			Website: " www.kansascommerce.com/",
			Email: "",
			PhoneNumber: "785-296-3481",
			},
			q16: {
			Description: "Information on funding opportunities for rural food businesses",
			WhoToContact: "USDA Rural Development",
			Website: "www.rd.usda.gov/ks",
			Email: "",
			PhoneNumber: "785-271-2700",
			},
			q17: {
			Description: "Resources and information on Sustainable Agriculture",
			WhoToContact: "Kansas Center for Sustainable Agriculture and Alternative Crops",
			Website: "kansassustainableag.org/",
			Email: "kebert@k-state.edu",
			PhoneNumber: "785-532-2976",
			},
			q18: {
			Description: "General farmers market food safety best practices questions; produce safety",
			WhoToContact: "Kansas State University Extension Consumer Food Safety Program",
			Website: "www.ksre.ksu.edu/foodsafety",
			Email: "lnwadike@ksu.edu",
			PhoneNumber: "913-307 -7391",
			},
			q19: {
			Description: "Information on production of fruits, vegetables, and live plants",
			WhoToContact: "Kansas State University Extension Horticulture Program; Specialty Crop Growers Association",
			Website: "https://hnr.k-state.edu/extension/",
			Email: "",
			PhoneNumber: "785-532-6173",
			},
		  
		  
		  }
        }},
        
    };
</script>
<style>

</style>
