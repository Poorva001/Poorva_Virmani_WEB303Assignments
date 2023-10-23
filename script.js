 // Defined the ContentItem class
 class ContentItem {
    constructor(id, name, description, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }

    updateContentItem(id, name, description, category) {
        if (id === this.id) {
            if (name !== null) {
                this.name = name;
            }
            if (description !== null) {
                this.description = description;
            }
            if (category !== null) {
                this.category = category;
            }
        }
    }

    toString() {
        return `<div id="content-item-${this.id}">
            <h4>${this.name}</h4>
            <p>${this.description}</p>
            <div>${this.category}</div>
        </div>`;
    }
}

// Created an array of content items
const contentItems = [
    new ContentItem(0, "Goldy", "Golden colored fish with tiny fins", "Fish"),
    new ContentItem(1, "Tommy", "Chihuahua dog with cute light colored fur", "Dog"),
    new ContentItem(2, "Blacky", "Beautiful black colored cat with brown colored eyes", "Cat"),
    new ContentItem(3, "Chi Chi", "Cute and cuddly brown and white colored hamster", "Hamster"),
    new ContentItem(4, "Piku", "Singing parrot with multicolor feathers", "Parrot"),
];

// Added content items to the page using jQuery
$(document).ready(function () {
    const $contentList = $("#content-item-list");

    contentItems.forEach((item) => {
        const $contentItem = $(item.toString());

        // Apply styling to each content item
        $contentItem.css({
            border: "1.5px solid violet",
            width: "340px",
            padding: "10px",
            margin: "15px auto",
        });

        $contentList.append($contentItem);
        const themeTitle = "Pet Shop";
        $("#content h2").text(themeTitle);
    });

    // Button click handlers
    $("#update-successful").on("click",function () {
        // Update a ContentItem successfully
        const updatedItem = contentItems[0];
        updatedItem.updateContentItem(0, "Gullu", "Golden colored fish with tiny fins", "Fish");

        // Update the displayed content
        const $updatedContent = $("#content-item-0");
        $updatedContent.find("h4").text(updatedItem.name);
        $updatedContent.find("p").text(updatedItem.description);
        $updatedContent.find("div").text(updatedItem.category);
    });

    $("#update-unsuccessful").on("click",function () {
        // Attempt to update a ContentItem unsuccessfully (not in the array)
        const updatedItem = new ContentItem(5, "New Item", "New description", "New Category");
        updatedItem.updateContentItem(5, "Updated Item", "Updated description", "Updated Category");
    });
});